package spring.angular.demo.service.imp;

import java.util.HashSet;
import java.util.Set;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import spring.angular.demo.entity.Role;
import spring.angular.demo.entity.Users;
import spring.angular.demo.repository.RoleRepository;
import spring.angular.demo.repository.UserRepository;
import spring.angular.demo.service.UserService;

@Service
public class UserServiceImp implements UserService {

	private static final Logger logger = LogManager.getLogger(UserServiceImp.class);

	@Autowired
	private RoleRepository roleDao;

	@Autowired
	private UserRepository userRepo;

	/*
	 * @Autowired private BCryptPasswordEncoder bCryptPasswordEncoder;
	 */

	@Override
	@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	public boolean createUser(Users user) {
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		Role newRole = new Role("ROLE_USER");
		roleDao.save(newRole);
		Set<Role> roles = new HashSet<>();
		roles.add(newRole);
		user.setRoles(roles);
		user = userRepo.save(user);
		return user != null;
	}

	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public Users findByUsernameAndPassword(String username, String password) {
		return userRepo.findByUsernameAndPassword(username, password);
	}

	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public Users getUserById(Integer id) {
		return userRepo.findById(id).get();
	}

	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public Users findByUsername(String username) {
		return userRepo.findByUsername(username);
	}

}