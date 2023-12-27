package spring.angular.demo.model;

/**
 * A DTO/Modal to hold user credentials when logging in 
 * 
 * @author Hoffman
 *
 */
public class LoginDetails {

	private String email;
	private String password;
	private String confirmPassword;

	public LoginDetails() {
		// TODO Auto-generated constructor stub
	}

	public LoginDetails(String email, String password, String confirmPassword) {
		super();
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	@Override
	public String toString() {
		return "LoginDetails [email=" + email + ", password=" + password + ", confirmPassword=" + confirmPassword + "]";
	}

}
