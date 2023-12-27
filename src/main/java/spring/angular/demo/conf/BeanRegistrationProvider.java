package spring.angular.demo.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Provide us with a Bean Registration that can be injected across the
 * application
 * 
 * @author Hoffman
 *
 */
@Configuration
public class BeanRegistrationProvider {

	@Bean
	ObjectMapper getObjectMapper() {
		return new ObjectMapper();
	}

}
