package demo.spring.angular.app;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import demo.spring.angular.entity.Movie;
import demo.spring.angular.entity.MovieRate;
import demo.spring.angular.repository.MovieRepository;
import demo.spring.angular.service.MovieCrawlerService;

//Declaring a Spring-Boot application Allow us to get Auto-Configuration and Auto-Component-Scanning and more for this java-module
@SpringBootApplication
//Declaring where the Spring-IOC-Container will be scanning for Spring-Beans
@ComponentScan({ "demo.spring.angular.app",
									"demo.spring.angular.rest", 
									"demo.spring.angular.repository", 
									"demo.spring.angular.service", 
									"demo.spring.angular.service.imp",
									"demo.spring.angular.conf" })
//Declaring where the Spring-IOC-Container will be scanning for DB-Entities to be used by JPA/Hibernate ORM System
@EntityScan({ "demo.spring.angular.entity", "demo.spring.angular.model" })
//Declaring where the Spring-IOC-Container will be scanning for the DAO-Persistence layer to be used by JPA-Spring Data
@EnableJpaRepositories({ "demo.spring.angular.repository" })
public class SpringAngularDemoApplication {
	private static final Logger log = LoggerFactory.getLogger(SpringAngularDemoApplication.class);

	//This property will determine where to take the {@link Movie} entities from;
	//If configured as 'file' - persistence unit will take the data from 'src/main/resources/DB.json'
	//If configured as 'web' - persistence unit will take the data from the web by {@link MovieCrawlerService} web crawler
	@Value("${movie.db.source}")
	private String movieDBSource;
	
	private static final String FILE = "file" ;
	private static final String WEB = "web" ;

	private ObjectMapper mapper = new ObjectMapper();

	public static void main(String[] args) {
		SpringApplication.run(SpringAngularDemoApplication.class, args);
	}

	/**
	 * Initialize and persist {@link Movie} entities on application upload
	 * PLEASE NOTICE : with what  source the 'movie.db.source' property configure to work with ('file' or 'web') 
	 * 
	 * 
	 * @param userRepository
	 * @param movieRepository
	 * @param movieCrawlerService
	 * @return {@link FunctionalInterface}
	 */
	@Bean
	CommandLineRunner init(MovieRepository movieRepository, MovieCrawlerService movieCrawlerService) {
		List<Movie> movieList = new ArrayList<>();;
		try {
			//Retrieve data from JSON file
			if (movieDBSource.contentEquals(FILE)) {
				String contents = new String(Files.readAllBytes(Paths.get("src/main/resources/DB.json")));
				movieList = mapper.readValue(contents, new TypeReference<List<Movie>>() {});
			} 
			
			//Retrieve data from the web
			else if (movieDBSource.contentEquals(WEB)) {
				movieList = movieCrawlerService.getMoviesFromTheWeb();
			}
			
			
			  //Persist Movie Enteties
		        movieList
		        .stream()
		        //Validate that the movie object contains enough info to be displayed to the user
		        .filter(movie -> !movie.isNotComplate())
		        .forEach(movie -> {
				movieRepository.save(new Movie(movie.getName(), movie.getGenre(), movie.getDataOfrelease(), movie.getImageURL(), movie.getVideoURL(), movie.getDuration(), movie.getDescription(),
				movie.getDirector(), movie.getWriters(), movie.getStars(), new MovieRate(movie.getMovieRate().getRaters(), movie.getMovieRate().getRate())));
				log.info("New movie was persist into the Database: {}", movie.getName());
			});

		} catch (Exception e) {
			log.error("An error occurred while trying to persist entities to the DB" , e.getMessage());
		}
		return null;
	}

}