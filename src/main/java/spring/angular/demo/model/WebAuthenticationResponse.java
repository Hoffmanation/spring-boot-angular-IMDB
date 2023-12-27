package spring.angular.demo.model;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * This class represents the Authentication response for the client in case of
 * successful authentication
 * 
 * @author Hoffman
 *
 */
@JsonInclude(Include.NON_NULL)
public class WebAuthenticationResponse extends WebResponse {

	@JsonProperty("message")
	private String message;
	@JsonProperty("additional_info")
	private String additionalInfo;
	@JsonProperty("granted")
	private Boolean granted;

	public WebAuthenticationResponse(HttpStatus httpStatus, String message, String additionalInfo, Boolean granted) {
		super(httpStatus);
		this.message = message;
		this.additionalInfo = additionalInfo;
		this.granted = granted;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	public Boolean getGranted() {
		return granted;
	}

	public void setGranted(Boolean granted) {
		this.granted = granted;
	}

}
