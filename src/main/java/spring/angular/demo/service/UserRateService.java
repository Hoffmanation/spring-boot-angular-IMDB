package spring.angular.demo.service;

import java.util.Optional;

import spring.angular.demo.entity.Movie;
import spring.angular.demo.entity.MovieRate;
import spring.angular.demo.entity.Role;
import spring.angular.demo.entity.User;
import spring.angular.demo.entity.UserRate;

/**
 * DAO for the {@link User}/ {@link UserRate} Entities
 */
public interface UserRateService {

	/**
	 * Create {@link User} with specific {@link Role} 
	 */
	boolean createUser(User user);

	/**
	 * Find {@link User} by username and password
	 * Mainly for login operations
	 */
	User findByUsernameAndPassword(String username, String password);

	/**
	 * Find {@link User} by ID (PK)
	 */
	User getUserById(Integer id);

	/**
	 * Find {@link User} by username 
	 */
	User findByUsername(String username);

	/**
	 * Get {@link UserRate} by ID (PK) 
	 */
	Optional<UserRate> getUserRateById(int userId);

	/**
	 * Get count of the number of people that were ever rated a specific movie
	 */
	int getUserRateCountForMovie(int movieId);

	/**
	 * Update {@link UserRate}
	 */
	void updateUserRate(UserRate userRate);


	
	
}
