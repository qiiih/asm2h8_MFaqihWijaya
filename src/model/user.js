const { Model } = require("sequelize");
const { ErrorMessage } = require("./response");

class User extends Model {}

class UserRequest {
	constructor(username, fullname, dob, phone) {
		this.username = username;
		this.fullname = fullname;
		this.dob = dob;
		this.phone = phone;
	}

	validate() {
		this.validateUsername();
		this.validateFullname();
		this.validateDOB();
		this.validatePhone();
	}

	validateUsername() {
		if (!this.username || this.username.length === 0) {
			throw new Error(ErrorMessage.ERROR_INVALID_USERNAME);
		}
	}

	validateFullname() {
		if (!this.fullname || this.fullname.length === 0) {
			throw new Error(ErrorMessage.ERROR_INVALID_NAME);
		}
	}

	validatePassword() {}

	validateDOB() {
		if (!this.dob || this.dob.length === 0) {
			throw new Error(ErrorMessage.ERROR_INVALID_DOB);
		}
	}

	validatePhone() {
		if (!this.phone || this.phone.length === 0) {
			throw new Error(ErrorMessage.ERROR_INVALID_PHONE);
		}
	}
}

module.exports = { User, UserRequest };
