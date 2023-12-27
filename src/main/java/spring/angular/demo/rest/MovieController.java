package spring.angular.demo.rest;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import spring.angular.demo.manager.MovieManager;
import spring.angular.demo.model.LoginDetails;
import spring.angular.demo.model.WebResponse;
/**
 * Collection of REST endpoint for the spring-angular-demo application
 * Authentication methods
 * 
 * @author Hoffman
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {

	public static final String USER_LOGIN = "user";

	@Autowired
	private MovieManager movieManager ;

	@PostMapping("/public/registration")
	public ResponseEntity<WebResponse> registration(@RequestBody(required = true) LoginDetails userDetail) {
		WebResponse results = movieManager.registration(userDetail) ;
		return new ResponseEntity<WebResponse>(results, results.getHttpStatus());
	}

	@PostMapping("/public/login")
	public ResponseEntity<WebResponse> login(@RequestBody(required = true) LoginDetails userDetail,  HttpServletRequest request) {
		WebResponse results = movieManager.login(userDetail) ;
		return new ResponseEntity<WebResponse>(results, results.getHttpStatus());
	}

}
