package spring.angular.demo.model;

public class LoginDetails {

	private String email ;
	private String password ;
	private String passwordConfirm ;
	
	public LoginDetails() {
		// TODO Auto-generated constructor stub
	}

	public LoginDetails(String email, String password, String passwordConfirm) {
		super();
		this.email = email;
		this.password = password;
		this.passwordConfirm = passwordConfirm;
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

	public String getPasswordConfirm() {
		return passwordConfirm;
	}

	public void setPasswordConfirm(String passwordConfirm) {
		this.passwordConfirm = passwordConfirm;
	}

	@Override
	public String toString() {
		return "LoginDetails [email=" + email + ", password=" + password + ", confirmPassword=" + passwordConfirm
				+ "]";
	}



	
	
}
