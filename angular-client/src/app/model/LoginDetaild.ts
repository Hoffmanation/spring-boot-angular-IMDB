export class LoginDetails {

	email: String;
	password: String;
	confirmPassword: String;

	constructor(email: String, password: String, confirmPassword: String) {
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
}
