package spring.angular.demo.conf;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsPasswordService;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

/**
 * Provide us with a login Authentication methods
 * injected as a custom implementation of the {@link AuthenticationProvider} spring security 
 * 
 * @author Hoffman
 *
 */
@Component
public class MyDaoAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

	/**
	 * The password used to perform
	 * {@link PasswordEncoder#matches(CharSequence, String)} on when the user is not
	 * found to avoid SEC-2056. This is necessary, because some
	 * {@link PasswordEncoder} implementations will short circuit if the password is
	 * not in a valid format.
	 */
	private static final String USER_NOT_FOUND_PASSWORD = "userNotFoundPassword";
	private volatile String userNotFoundEncodedPassword;


	/*
	 *Spring Dependency Injection 
	 */
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	//Overriding default spring's UserDetailsService Impl 
    @Qualifier("myUserDetailsService")
	private UserDetailsService userDetailsService;

	@Autowired
	private InMemoryUserDetailsManager inMemoryUserDetailsManager;


	public MyDaoAuthenticationProvider() {
		setPasswordEncoder(PasswordEncoderFactories.createDelegatingPasswordEncoder());
	}
	
	/**
	 * Creates a successful {@link Authentication} object.
	 * it store the original credentials the user supplied  in the returned Authentication object.
	 *
	 * @param application users as {@link Principal} 
	 * @param Authentication that was presented to the provider for validation
	 * @param injected customer impl of UserDetails 
	 *
	 * @return the successful authentication token
	 */
	@Override
	protected Authentication createSuccessAuthentication(Object principal, Authentication authentication, UserDetails user) {
		//Validate if he encoded password should be encoded again for better security
		boolean upgradeEncoding = (this.inMemoryUserDetailsManager != null && this.passwordEncoder.upgradeEncoding(user.getPassword()));
		if (upgradeEncoding) {
			String presentedPassword = authentication.getCredentials().toString();
			String newPassword = this.passwordEncoder.encode(presentedPassword);
			//
			user = this.inMemoryUserDetailsManager.updatePassword(user, newPassword);
		}
		return super.createSuccessAuthentication(principal, authentication, user);
	}

	private void prepareTimingAttackProtection() {
		if (this.userNotFoundEncodedPassword == null) {
			this.userNotFoundEncodedPassword = this.passwordEncoder.encode(USER_NOT_FOUND_PASSWORD);
		}
	}

	protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
		if (authentication.getCredentials() == null) {
			logger.debug("Authentication failed: no credentials provided");

			throw new BadCredentialsException(messages.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "Bad credentials"));
		}

		String presentedPassword = authentication.getCredentials().toString();

		if (!passwordEncoder.matches(presentedPassword, userDetails.getPassword())) {
			logger.debug("Authentication failed: password does not match stored value");
			authentication.setAuthenticated(false);
		}
	}

	protected void doAfterPropertiesSet() {
		Assert.notNull(this.userDetailsService, "A UserDetailsService must be set");
	}

	protected final UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
		prepareTimingAttackProtection();
		try {
			UserDetails loadedUser = this.getUserDetailsService().loadUserByUsername(username);
			if (loadedUser == null) {
				throw new InternalAuthenticationServiceException("UserDetailsService returned null, which is an interface contract violation");
			}
			return loadedUser;
		} catch (UsernameNotFoundException ex) {
			mitigateAgainstTimingAttack(authentication);
			throw ex;
		} catch (InternalAuthenticationServiceException ex) {
			throw ex;
		} catch (Exception ex) {
			throw new InternalAuthenticationServiceException(ex.getMessage(), ex);
		}
	}

	private void mitigateAgainstTimingAttack(UsernamePasswordAuthenticationToken authentication) {
		if (authentication.getCredentials() != null) {
			String presentedPassword = authentication.getCredentials().toString();
			this.passwordEncoder.matches(presentedPassword, this.userNotFoundEncodedPassword);
		}
	}

	/**
	 * Sets the PasswordEncoder instance to be used to encode and validate
	 * passwords. If not set, the password will be compared using
	 * {@link PasswordEncoderFactories#createDelegatingPasswordEncoder()}
	 *
	 * @param passwordEncoder must be an instance of one of the
	 *                        {@code PasswordEncoder} types.
	 */
	public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
		Assert.notNull(passwordEncoder, "passwordEncoder cannot be null");
		this.passwordEncoder = passwordEncoder;
		this.userNotFoundEncodedPassword = null;
	}

	protected PasswordEncoder getPasswordEncoder() {
		return passwordEncoder;
	}

	public void setUserDetailsService(UserDetailsService userDetailsService) {
		this.userDetailsService = userDetailsService;
	}

	protected UserDetailsService getUserDetailsService() {
		return userDetailsService;
	}

	public void setUserDetailsPasswordService(InMemoryUserDetailsManager inMemoryUserDetailsManager) {
		this.inMemoryUserDetailsManager = inMemoryUserDetailsManager;
	}
}
