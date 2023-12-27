package spring.angular.demo.service.imp;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import spring.angular.demo.repository.UserRepository;

/**
 * Service for a custom implementation of spring security UserDetailsService
 */
@Service("myUserDetailsService")
public class userDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepo;

	/**
	 * Locates the user based on the username. 
	 *
	 * @param email (the variable which identifying the user)
	 * @return a fully populated user record (never <code>null</code>)
	 * @throws UsernameNotFoundException if the user could not be found or the user has no
	 * GrantedAuthority
	 */
	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		spring.angular.demo.entity.User appUser = userRepo.findByUsername(email);
	      if (appUser == null) {
	            throw new UsernameNotFoundException(email);
	        }
		List<GrantedAuthority> authorities = buildUserAuthority("ROLE_USER");
		return buildUserForAuthentication(appUser, authorities);
	}
	
	/**
	 * {@link User} Builder
	 * @param appUser
	 * @param authorities
	 * @return
	 */
	private User buildUserForAuthentication(spring.angular.demo.entity.User appUser, List<GrantedAuthority> authorities) {
		User springUserDetail = null;
		try {
			springUserDetail = new User(appUser.getEmail(), appUser.getPassword(), true, true, true, true, authorities);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return springUserDetail;
	}
	
	/**
	 * List of {@link GrantedAuthority} builder
	 * {@link User} Builder
	 * @param appUser
	 * @param authorities
	 * @return
	 */
	private List<GrantedAuthority> buildUserAuthority(String role) {
		Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();
		setAuths.add(new SimpleGrantedAuthority(role));
		List<GrantedAuthority> result = new ArrayList<GrantedAuthority>(setAuths);
		return result;
	}
	

}