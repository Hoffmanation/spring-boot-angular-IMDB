package spring.angular.demo.service;

import java.util.ArrayList;
import java.util.Optional;

import spring.angular.demo.entity.Movie;
import spring.angular.demo.entity.MovieRate;

/**
 * DAO for the {@link Movie}/ {@link MovieRate} Entities
 */
public interface MovieRateService {

	/**
	 * Get a list of all {@link Movie} available
	 */
	ArrayList<Movie> getAllMovies();

	/**
	 * Get all {@link Movie} names
	 */
	ArrayList<String> getAllMovieNames();

	/**
	 * Get a list of all {@link Movie} of a specific Genre
	 */
	ArrayList<Movie> getMoviesByGenre(String genre);

	/**
	 * Get specific {@link Movie} By his name
	 */
	Movie getMovieByName(String name);

	/**
	 * Get a list of random {@link Movie} with limit
	 */
	ArrayList<Movie> getRandomMovie(int limit);

	/**
	 * Get specific {@link MovieRate} by his ID (PK)
	 */
	Optional<MovieRate> getMovieRateById(int id);

	/**
	 * Get specific {@link Movie} by his ID (PK)
	 */
	Optional<Movie> getMovieById(int id);

	/**
	 * Get a list of all {@link Movie} Genres
	 */
	ArrayList<String> getAllMovieGenres();

	/**
	 * Updates a {@link MovieRate}
	 */
	MovieRate updateMovieRate(MovieRate movieRate);

	/**
	 * Get the sum of all ratings of a specific movie 
	 * (Use in calculating new rate for a movie)
	 */
	Double getUserRateSumForMovie(int movieId);


}
