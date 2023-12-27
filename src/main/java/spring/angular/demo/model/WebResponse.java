package spring.angular.demo.model;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The root class to extend for the Rest Api's Json response
 * 
 * @author Hoffman
 *
 */
@JsonInclude(Include.NON_NULL)
public abstract class WebResponse {

	@JsonProperty("http_status")
	private HttpStatus httpStatus;
	@JsonProperty("time_stamp")
	private Long timeStamp;

	public WebResponse(HttpStatus httpStatus) {
		super();
		this.httpStatus = httpStatus;
		this.timeStamp = System.currentTimeMillis();
	}

	public HttpStatus getHttpStatus() {
		return httpStatus;
	}

	public void setHttpStatus(HttpStatus httpStatus) {
		this.httpStatus = httpStatus;
	}

	public Long getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Long timeStamp) {
		this.timeStamp = timeStamp;
	}

}
