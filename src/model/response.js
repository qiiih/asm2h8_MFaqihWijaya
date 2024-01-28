const SuccessMessage = {
	USER_CREATED: "User successfully created!",
	USER_FETCHED: "User successfully fetched!",
	USER_UPDATED: "User successfully updated!",
};

const ErrorMessage = {
	ERROR_USER_CREATION: "Error creating user, please try again!",
	ERROR_USER_FETCH: "Error fetching user, please try again!",
	ERROR_USER_UPDATE: "Error updating user, please try again!",
	ERROR_USER_NOT_FOUND: "Error user not found!",

	ERROR_INVALID_USERNAME: "invalid username",
	ERROR_INVALID_NAME: "invalid name",
	ERROR_INVALID_DOB: "invalid dob",
	ERROR_INVALID_PHONE: "invalid phone",
	ERROR_INVALID_USER_ID: "invalid user id",
};

class SuccessResponse {
	constructor(message, data) {
		this.message = message;
		this.data = data;
	}
}

class ErrorResponse {
	constructor(message, data) {
		this.message = message;
		this.data = data;
	}
}

module.exports = {
	SuccessResponse,
	ErrorResponse,
	SuccessMessage,
	ErrorMessage,
};
