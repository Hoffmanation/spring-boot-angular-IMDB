package spring.angular.demo.service;

public interface SecurityService {

	/**
	 * This method is custom implementation of the spring security get principal from security context
	 * user
	 */
	String getLoggedInUsername();

	/**
	 * This method is custom implementation of the spring security login method
	 */
	boolean autologin(String username, String password);

}
