package spring.angular.demo.service;

public interface SecurityService {

	public String findLoggedInUsername();

	public boolean autologin(String username, String password);
}
