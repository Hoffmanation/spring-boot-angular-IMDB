package spring.angular.demo.service;

import java.util.List;

import spring.angular.demo.entity.Movie;

public interface MovieCrawlerService {

	/**
	 * This method will fetch the DB.json containing the movie data
	 * 
	 * @return String contain a list of {@link Movie} in a JSON form
	 */
	String getMoviesFromRemoteJson();

	/**
	 * This method will crawl the web via {@link Jsoup} in order to retrieve the
	 * {@link Movie} data
	 * Executed as multithread  operation - new thread for every movie page
	 * 
	 * @return Set<Movie> - a data structure containing the movie data we obtain
	 *         from the web
	 */
	List<Movie> getMoviesFromTheWeb();

}
