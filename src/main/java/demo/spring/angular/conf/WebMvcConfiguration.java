package demo.spring.angular.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * A web View configuration class to handle static resources location and base
 * html page
 * 
 * @author Hoffman
 *
 */
@Configuration
public class WebMvcConfiguration extends WebMvcConfigurerAdapter {

	// Initialize array with possible static resources locations
	private static final String[] CLASSPATH_RESOURCE_LOCATIONS = { "classpath:/META-INF/resources/", "classpath:/resources/", "classpath:/static/", "classpath:/public/" };

	/**
	 * Implement the static resources location array
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
	}

	/**
	 * Configure cors since we using angular development server
	 */
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/public/**").allowedMethods("PUT", "GET", "DELETE", "OPTIONS", "PATCH", "POST").allowedOrigins("http://localhost:4200").allowCredentials(true);
		registry.addMapping("/private/**").allowedMethods("PUT", "GET", "DELETE", "OPTIONS", "PATCH", "POST").allowedOrigins("http://localhost:4200").allowCredentials(true);;
	}

	/**
	 * Configure what will be the 'Base page' of our application (What the user will
	 * see when he will access the application URL)
	 */
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("forward:/index.html");
		registry.addViewController("/home").setViewName("forward:/index.html");
		registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
		super.addViewControllers(registry);
	}
}