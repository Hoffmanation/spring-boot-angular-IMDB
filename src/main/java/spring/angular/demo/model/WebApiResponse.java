package spring.angular.demo.model;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * This class represents the web API response for the client in case of a
 * "/private" API has being invoked
 * 
 * @author Hoffman
 *
 */
@JsonInclude(Include.NON_NULL)
public class WebApiResponse extends WebResponse {

	@JsonProperty("message")
	private String message;
	@JsonProperty("response_body")
	private Object object;

	public WebApiResponse(String message, Object object, HttpStatus httpStatus) {
		super(httpStatus);
		this.message = message;
		this.object = object;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getObject() {
		return object;
	}

	public void setObject(Object object) {
		this.object = object;
	}
}
