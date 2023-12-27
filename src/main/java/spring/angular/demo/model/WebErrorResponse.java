package spring.angular.demo.model;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * This class represents the Error response for the client in case of
 * authentication failure
 * 
 * @author Hoffman
 *
 */
@JsonInclude(Include.NON_NULL)
public class WebErrorResponse extends WebResponse {

	@JsonProperty("error_message")
	private String errorMessage;
	@JsonProperty("additional_info")
	private String additionalInfo;

	public WebErrorResponse(String errorMessage, String additionalInfo, HttpStatus httpStatus) {
		super(httpStatus);
		this.errorMessage = errorMessage;
		this.additionalInfo = additionalInfo;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

}
