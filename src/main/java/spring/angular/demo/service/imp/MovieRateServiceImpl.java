package spring.angular.demo.service.imp;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.angular.demo.entity.Movie;
import spring.angular.demo.entity.MovieRate;
import spring.angular.demo.repository.MovieRepository;
import spring.angular.demo.repository.MovieRateRepository;
import spring.angular.demo.service.MovieRateService;

/**
 * The User/Role DAO service
 */
@Service
public class MovieRateServiceImpl implements MovieRateService {

	/*
	 * Spring Dependency Injection
	 */
	@Autowired
	private MovieRepository movieRepo;

	@Autowired
	private MovieRateRepository movieRateRepo;

	/**
	 * Get a list of all {@link Movie} available
	 */
	@Override
	public ArrayList<Movie> getAllMovies() {
		return (ArrayList<Movie>) movieRepo.findAll();
	}

	/**
	 * Get all {@link Movie} names
	 */
	@Override
	public ArrayList<String> getAllMovieNames() {
		return (ArrayList<String>) movieRepo.getAllMovieNames();
	}

	/**
	 * Get a list of all {@link Movie} of a specific Genre
	 */
	@Override
	public ArrayList<Movie> getMoviesByGenre(String genre) {
		return (ArrayList<Movie>) movieRepo.getMoviesByGenre(genre);
	}

	/**
	 * Get specific {@link Movie} By his name
	 */
	@Override
	public Movie getMovieByName(String name) {
		return movieRepo.getMovieByName(name);
	}

	/**
	 * Get a list of random {@link Movie} with limit
	 */
	@Override
	public ArrayList<Movie> getRandomMovie(int limit) {
		return (ArrayList<Movie>) movieRepo.getRandomMovie(limit);
	}

	/**
	 * Get specific {@link MovieRate} by his ID (PK)
	 */
	@Override
	public Optional<MovieRate> getMovieRateById(int id) {
		return movieRateRepo.findById(id);
	}

	/**
	 * Get specific {@link Movie} by his ID (PK)
	 */
	@Override
	public Optional<Movie> getMovieById(int id) {
		return movieRepo.findById(id);
	}

	/**
	 * Get a list of all {@link Movie} Genres
	 */
	@Override
	public ArrayList<String> getAllMovieGenres() {
		return (ArrayList<String>) movieRepo.getAllMovieGenres();
	}

	/**
	 * Updates a {@link MovieRate}
	 */
	@Override
	public MovieRate updateMovieRate(MovieRate movieRate) {
		return movieRateRepo.save(movieRate);
	}

	/**
	 * Get the sum of all ratings of a specific movie 
	 * (Use in calculating new rate for a movie)
	 */
	@Override
	public Double getUserRateSumForMovie(int movieId) {
		return movieRateRepo.getUserRateSumForMovie(movieId);
	}

}
