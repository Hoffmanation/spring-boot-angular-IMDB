package spring.angular.demo.conf;

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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import spring.angular.demo.entity.Role;
import spring.angular.demo.entity.Users;
import spring.angular.demo.repository.UserRepository;

@Service("userDetailsService")
public class userDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserRepository userRepo;

	private List<GrantedAuthority> buildUserAuthority(String role) {
		Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();
		setAuths.add(new SimpleGrantedAuthority(role));
		List<GrantedAuthority> result = new ArrayList<GrantedAuthority>(setAuths);
		return result;
	}

	private User buildUserForAuthentication(Users appUser, List<GrantedAuthority> authorities) {
		User springUserDetail = null;
		try {
			springUserDetail = new User(appUser.getEmail(), appUser.getPassword(), true, true, true, true, authorities);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return springUserDetail;
	}

	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Users appUser = userRepo.findByUsername(email);
	      if (appUser == null) {
	            throw new UsernameNotFoundException(email);
	        }
		List<GrantedAuthority> authorities = buildUserAuthority("ROLE_USER");
		return buildUserForAuthentication(appUser, authorities);
	}
	

}