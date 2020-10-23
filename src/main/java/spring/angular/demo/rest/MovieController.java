package spring.angular.demo.rest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import spring.angular.demo.entity.Users;
import spring.angular.demo.model.LoginDetails;
import spring.angular.demo.service.SecurityService;
import spring.angular.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {

	public static final String USER_LOGIN = "user";

	@Autowired
	private UserService userService;

	@Autowired
	private SecurityService securityService;

	@RequestMapping(path = "/public/registration", method = RequestMethod.POST)
	public ResponseEntity<String> registration(@RequestBody(required = true) LoginDetails userDetail, HttpServletRequest request) {
		if (userService.findByUsername(userDetail.getEmail()) != null) {
			return new ResponseEntity<String>("A user with the same email already exist", HttpStatus.CONFLICT);
		}
		Users user = new Users(userDetail.getEmail(), userDetail.getPassword());
		if (userService.createUser(user)) {
			securityService.autologin(userDetail.getEmail(), userDetail.getPassword());
			HttpSession session = request.getSession(true);
			session.setAttribute(USER_LOGIN, user);
			return new ResponseEntity<String>(user.getEmail(), HttpStatus.CREATED);
		}

		return new ResponseEntity<String>("An error has occured, please try again later", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@RequestMapping(path = "/public/login", method = RequestMethod.POST)
	public ResponseEntity<String> login(@RequestBody LoginDetails userDetail,  HttpServletRequest request) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		if (securityService.autologin(userDetail.getEmail(), userDetail.getPassword())) {
			Users user = userService.findByUsername(userDetail.getEmail());
			if (passwordEncoder.matches(userDetail.getPassword(), user.getPassword())) {
				HttpSession session = request.getSession(true);
				session.setAttribute(USER_LOGIN, user);
				return new ResponseEntity<String>(user.getEmail(), HttpStatus.OK);
			}
		}
		return new ResponseEntity<String>("Username or password are incorrect", HttpStatus.CONFLICT);
	}


}
