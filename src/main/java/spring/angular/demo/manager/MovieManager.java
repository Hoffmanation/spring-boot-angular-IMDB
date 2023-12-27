package spring.angular.demo.manager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import spring.angular.demo.entity.Movie;
import spring.angular.demo.entity.MovieRate;
import spring.angular.demo.entity.User;
import spring.angular.demo.entity.UserRate;
import spring.angular.demo.model.LoginDetails;
import spring.angular.demo.model.WebAuthenticationResponse;
import spring.angular.demo.model.WebResponse;
import spring.angular.demo.service.MovieRateService;
import spring.angular.demo.service.SecurityService;
import spring.angular.demo.service.UserRateService;

/**
 * Global service manager to hold all application services
 */
@Service
public class MovieManager {

	/*
	 *Spring Dependency Injection 
	 */
	
	@Autowired
	private UserRateService userRateService;

	@Autowired
	private SecurityService securityService;
	
	@Autowired
	private MovieRateService movieRateService;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	/**
	 * Execute registration
	 * 
	 * @param LoginDetails - Full User data
	 * @return WebResponse - A message to the Client
	 *         and a corresponded HTTP status
	 */
	public WebResponse registration(LoginDetails userDetail) {
		if (userRateService.findByUsername(userDetail.getEmail()) != null) {
			return new WebAuthenticationResponse(HttpStatus.CONFLICT, userDetail.getEmail(),
					"A user with the same email already exist, Please use different email", false);
		}
		User user = new User(userDetail.getEmail(), userDetail.getPassword());
		if (userRateService.createUser(user)) {
			securityService.autologin(userDetail.getEmail(), userDetail.getPassword());
			return new WebAuthenticationResponse(HttpStatus.CREATED, user.getEmail(), null, true);
		}
		return new WebAuthenticationResponse(HttpStatus.INTERNAL_SERVER_ERROR, user.getEmail(),
				"An error has occured, please try again later", false);
	}

	/**
	 * Execute login
	 * 
	 * @param LoginDetails - contain  only Credentials
	 * @return WebResponse - A message to the Client
	 *         and a corresponded HTTP status
	 */
	public WebResponse login(LoginDetails userDetail) {
		if (securityService.autologin(userDetail.getEmail(), userDetail.getPassword())) {
			User user = userRateService.findByUsername(userDetail.getEmail());
			if (passwordEncoder.matches(userDetail.getPassword(), user.getPassword())) {
				return new WebAuthenticationResponse(HttpStatus.OK, user.getEmail(),
						null, true);
			}
		}
		return new WebAuthenticationResponse(HttpStatus.BAD_REQUEST, userDetail.getEmail(),
				"Username or password are incorrect", false);
	}
	
	/**
	 * Execute Rate Movie for a specific movie
	 * @param userRate
	 * @return {@link MovieRate} already recalculated with the new user rate for this specific movie 
	 */
	public MovieRate rateMovie(UserRate userRate) {
		//Calculate new rate 
		int ratersCount  = userRateService.getUserRateCountForMovie(userRate.getMovie().getId()) +1 ;
		Double RatesSum = movieRateService.getUserRateSumForMovie(userRate.getMovie().getId()) + userRate.getRate() ;
		Double finalRate = ratersCount / RatesSum ;
		
		//Get and update new MovieRate
		Optional<MovieRate> movieRateOptional = movieRateService.getMovieRateById(userRate.getId()) ;
		MovieRate movieRate  = movieRateOptional.orElseThrow(() -> new IllegalArgumentException("Record not found")) ;
		movieRate.setRate(finalRate);
		movieRate = movieRateService.updateMovieRate(movieRate) ;

		//Update new userRate
		userRateService.updateUserRate(userRate) ;
		return movieRate ;
	}

	/**
	 * From here down below all publicized Get/Read method
	 * @return
	 */
	
	public ArrayList<Movie> getAllMovies() {
		return movieRateService.getAllMovies();
	}

	public ArrayList<String> getAllMovieNames() {
		return  movieRateService.getAllMovieNames();
	}

	public ArrayList<Movie> getMoviesByGenre(String genre) {
		return movieRateService.getMoviesByGenre(genre);
	}

	public HashSet<String> getAllMovieGenres() {
		HashSet<String> genres = new HashSet<String>();
		List<String> rawGenres = movieRateService.getAllMovieGenres();
		rawGenres
		.stream()
		.filter(genre -> StringUtils.isNotEmpty(genre))
		.forEach(genre -> {
			Arrays.asList(genre.split(","))
			.stream()
			.filter(newGender -> !genres.contains(newGender))
			.forEach(newGender -> genres.add(newGender));
		});
		return genres ;
	}

	public Movie getMovieByName(String name) {
		return movieRateService.getMovieByName(name) ;
	}

	public Movie getMovieById(int id) {
		Optional<Movie> movieOptional = movieRateService.getMovieById(id) ;
		Movie movie =movieOptional.orElseThrow(() -> new IllegalArgumentException("Record not found")) ;
		return movie ;
	}

	public ArrayList<Movie> getRandomMovie(int limit) {
		return  movieRateService.getRandomMovie(limit);
	}
}