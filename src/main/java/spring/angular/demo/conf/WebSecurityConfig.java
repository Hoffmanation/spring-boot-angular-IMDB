package spring.angular.demo.conf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsPasswordService;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.filter.CorsFilter;

/**
 * A Web security configuration class for determining web behaviour,Authorities and user roles
 * @author Hoffman
 *
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	/*
	 *Spring Dependency Injection 
	 */
	
	@Autowired
    @Qualifier("myUserDetailsService")
    public UserDetailsService userDetailsService;
	
	@Autowired
	public MyDaoAuthenticationProvider provider ;

    /*
   * Creates a {@link BCryptPasswordEncoder} Spring-Bean to be 
   * used when ever encryption  is need 
   * @return {@link BCryptPasswordEncoder}
   */
    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean(name = BeanIds.AUTHENTICATION_MANAGER)
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	
	@Bean
	 InMemoryUserDetailsManager inMemoryUserDetailsManager() {
	  return  new InMemoryUserDetailsManager();
	}
	
    /*
     *Main Web security configuration method 
     */
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		//Spring security specification as following:
		//When requested URL containing "/private/" -> Fully Authenticate user is logged in by Basic Auth  (Base62.encode(username:password))
		//Any request besides it -> permit
		//Add logout filter for the a  "/private/logout"
		
		//Register our custom implementation for the AuthenticationProvider 
		http.authenticationProvider(provider)
		.authorizeRequests()
		
		//Authenticate every HTTP request that trying to access a private  REST endpoint
		.antMatchers("/private/**").fullyAuthenticated()
		//.antMatchers("/private/**").hasRole('USER')
		
		//Permit all HTTP requests that trying to get a static resource or public REST endpoint
		.antMatchers("/**").permitAll() 
		.anyRequest().authenticated()
		.and()
		
		//Register a logout URL and a logout filter
	    .logout() 
	    .logoutRequestMatcher( new AntPathRequestMatcher("/private/logout"))
        .addLogoutHandler(new LogoutHandlerFilter())
      
        //Add Authentication with  Basic Auth ("Authorization: Basic" Header)
        .and().
		httpBasic()
		
		//Disable csrf token and add the default CorsFilter
		.and().csrf().disable().cors()
		
		//Allow <iframe> to be open if the request  came from the same origin
		.and().headers().frameOptions().sameOrigin() ;
		
		
	}
	

	
    /*
     * Via injection we are configuring {@link AuthenticationManagerBuilder} 
     * to use {@link UserDetailsService} as the in-memoty authentication provider
     * and {@link BCryptPasswordEncoder} as the password encryptor. 
     */
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(provider)
		.parentAuthenticationManager(authenticationManagerBean())
		.userDetailsService(userDetailsService);
	}

}