package spring.angular.demo.rest;

import java.util.ArrayList;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import spring.angular.demo.entity.Movie;
import spring.angular.demo.entity.MovieRate;
import spring.angular.demo.entity.UserRate;
import spring.angular.demo.manager.MovieManager;

/**
 * Collection of REST endpoint for the spring-angular-demo application
 * After Authentication ("/private/") ,  No Authentication needed ("/public/") 
 * @author Hoffman
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MovieUIController {

	@Autowired
	private MovieManager movieManager;

	@GetMapping("/public/getAllMovies")
	public ResponseEntity<ArrayList<Movie>> getAllMovies() {
		return new ResponseEntity<ArrayList<Movie>>(movieManager.getAllMovies(), HttpStatus.OK);
	}

	@GetMapping("/public/getAllMovieNames")
	public ResponseEntity<ArrayList<String>> getAllMovieNames() {
		return new ResponseEntity<ArrayList<String>>(movieManager.getAllMovieNames(), HttpStatus.OK);
	}

	@GetMapping("/public/getMoviesByGenre/{genre}")
	public ResponseEntity<ArrayList<Movie>> getMoviesByGenre(@PathVariable("genre") String genre) {
		return new ResponseEntity<ArrayList<Movie>>(movieManager.getMoviesByGenre(genre), HttpStatus.OK);
	}

	@GetMapping("/public/getAllMovieGenres")
	public ResponseEntity<HashSet<String>> getAllMovieGenres() {
		return new ResponseEntity<HashSet<String>>(movieManager.getAllMovieGenres(), HttpStatus.OK);
	}

	@GetMapping("/public/getMovieByName/{name}")
	public ResponseEntity<Movie> getMovieByName(@PathVariable("name") String name) {
		return new ResponseEntity<Movie>(movieManager.getMovieByName(name), HttpStatus.OK);
	}

	@GetMapping("/public/getMovieById/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable("id") int id) {
		return new ResponseEntity<Movie>(movieManager.getMovieById(id), HttpStatus.OK);
	}

	@GetMapping("/public/getTodaysMoviePick")
	public ResponseEntity<Movie> getTodaysMoviePick() {
		Movie pickMovie = movieManager.getRandomMovie(1).get(0);
		return new ResponseEntity<Movie>(pickMovie, HttpStatus.OK);
	}

	@GetMapping("/public/getTodaysTrailersPick")
	public ResponseEntity<ArrayList<Movie>> getTodaysTrailersPick() {
		return new ResponseEntity<ArrayList<Movie>>(movieManager.getRandomMovie(15), HttpStatus.OK);
	}
	
	@PreAuthorize("hasRole('ROLE_USER')")
	@PutMapping("/private/reteMovie")
	public ResponseEntity<MovieRate> reteMovie(UserRate userRate) {
		return new ResponseEntity<MovieRate>(movieManager.rateMovie(userRate), HttpStatus.OK);
	}

}