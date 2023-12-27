package spring.angular.demo.service.imp;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.jboss.logging.Logger ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import spring.angular.demo.entity.Role;
import spring.angular.demo.entity.User;
import spring.angular.demo.entity.UserRate;
import spring.angular.demo.repository.RoleRepository;
import spring.angular.demo.repository.UserRateRepository;
import spring.angular.demo.repository.UserRepository;
import spring.angular.demo.service.UserRateService;

/**
 * The User/Role DAO service
 */
@Service
public class UserRateServiceImp implements UserRateService {
	private static final Logger logger = Logger.getLogger(UserRateServiceImp.class);

	/*
	 *Spring Dependency Injection 
	 */
	@Autowired
	private RoleRepository roleDao;

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private UserRateRepository userRateRepo;

	 @Autowired 
	 private BCryptPasswordEncoder bCryptPasswordEncoder;

	/**
	 * Create {@link User} with specific {@link Role} 
	 */
	@Override
	@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	public boolean createUser(User user) {
		logger.debug(String.format("createUser: Start, User: %s",user ));
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		Role newRole = new Role("ROLE_USER");
		roleDao.save(newRole);
		Set<Role> roles = new HashSet<>();
		roles.add(newRole);
		user.setRoles(roles);
		user = userRepo.save(user);
		logger.debug(String.format("createUser: Finish, User: %s",user ));
		return user != null;
	}

	/**
	 * Find {@link User} by username and password
	 * Mainly for login operations
	 */
	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public User findByUsernameAndPassword(String username, String password) {
		logger.debug(String.format("findByUsernameAndPassword: Start, username=%s, password=%s",username,password));
		User user = userRepo.findByUsernameAndPassword(username, password);
		logger.debug(String.format("findByUsernameAndPassword: Finish, User: %s",user ));
		return user ;
	}

	/**
	 * Find {@link User} by ID (PK)
	 */
	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public User getUserById(Integer id) {
		logger.debug(String.format("getUserById: Start, id=%s",id));
		User user = userRepo.findById(id).get();
		logger.debug(String.format("getUserById: Finish, User: %s",user ));
		return user ;
	}

	/**
	 * Find {@link User} by username 
	 */
	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public User findByUsername(String username) {
		logger.debug(String.format("findByUsername: Start, username=%s",username));
		User user =  userRepo.findByUsername(username);
		logger.debug(String.format("getUserById: Finish, User: %s",user ));
		return user ;
	}

	/**
	 * Get {@link UserRate} by ID (PK) 
	 */
	@Override
	public Optional<UserRate> getUserRateById(int userId) {
		return userRateRepo.findByUserId(userId) ;
	}

	/**
	 * Get count of the number of people that were ever rated a specific movie
	 */
	@Override
	public int getUserRateCountForMovie(int movieId) {
		return userRateRepo.getUserRateCountForMovie(movieId) ;
	}

	/**
	 * Update {@link UserRate}
	 */
	@Override
	public void updateUserRate(UserRate userRate) {
		userRateRepo.save(userRate) ;
	}


}