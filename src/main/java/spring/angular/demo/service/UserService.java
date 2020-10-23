package spring.angular.demo.service;

import java.util.List;
import java.util.Set;
import java.util.UUID;

import spring.angular.demo.entity.Users;

public interface UserService {
	
	public boolean createUser(Users user) ;

	public Users getUserById(Integer id) ;
	
	public Users findByUsernameAndPassword(String username, String password) ;
	
	public Users findByUsername(String username) ;
	
}
