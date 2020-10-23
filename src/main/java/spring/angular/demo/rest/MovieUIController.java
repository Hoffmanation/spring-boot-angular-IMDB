package spring.angular.demo.rest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import spring.angular.demo.entity.Movie;
import spring.angular.demo.repository.MovieRepository;

/**
 * Collection of REST endpoint for the spring-angular-demo application
 * 
 * @author Hoffman
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MovieUIController {

	@Autowired
	private MovieRepository movieService;

	@GetMapping("/public/getAllMovies")
	public ResponseEntity<Iterable<Movie>> getAllMovies() {
		return new ResponseEntity<Iterable<Movie>>(movieService.findAll(), HttpStatus.OK);
	}

	@GetMapping("/public/getAllMovieNames")
	public ResponseEntity<Iterable<String>> getAllMovieNames() {
		return new ResponseEntity<Iterable<String>>(movieService.getAllMovieNames(), HttpStatus.OK);
	}

	@GetMapping("/public/getMoviesByGenre/{genre}")
	public ResponseEntity<Iterable<String>> getMoviesbyGenre(@PathVariable("genre") String genre) {
		return new ResponseEntity<Iterable<String>>(movieService.getMoviesByGenre(genre), HttpStatus.OK);
	}

	@GetMapping("/public/getAllMovieGenres")
	public ResponseEntity<Iterable<String>> getAllMovieGenres() {
		Set<String> genres = new HashSet<String>();
		List<String> rawGenres = (List<String>) movieService.getAllMovieGenres();
		rawGenres.stream().filter(genre -> StringUtils.isNotEmpty(genre)).forEach(genre -> {
			Arrays.asList(genre.split(",")).stream().filter(newGender -> !genres.contains(newGender)).forEach(newGender -> genres.add(newGender));
		});
		return new ResponseEntity<Iterable<String>>(genres, HttpStatus.OK);
	}

	@GetMapping("/public/getMovieByName/{name}")
	public ResponseEntity<Movie> getMovieByName(@PathVariable("name") String name) {
		Movie movie = movieService.getMovieByName(name);
		return new ResponseEntity<Movie>(movie, HttpStatus.OK);
	}

	@GetMapping("/public/getMovieById/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable("id") int id) {
		Optional<Movie> movie = movieService.findById(id);
		return new ResponseEntity<Movie>(movie.get(), HttpStatus.OK);
	}

	@GetMapping("/public/getTodaysMoviePick")
	public ResponseEntity<Movie> getTodaysMoviePick() {
		List<Movie> movies = (List<Movie>) movieService.findAll();
		Random rand = new Random();
		Movie pickMovie = movies.get(rand.nextInt(movies.size()));
		return new ResponseEntity<Movie>(pickMovie, HttpStatus.OK);
	}

	@GetMapping("/public/getTodaysTrailersPick")
	public ResponseEntity<ArrayList<Movie>> getTodaysTrailersPick() {
		return new ResponseEntity<ArrayList<Movie>>((ArrayList<Movie>) movieService.getRandomMovie(), HttpStatus.OK);
	}

}