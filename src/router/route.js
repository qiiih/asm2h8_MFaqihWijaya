class UserRouter {
	constructor(app, userController) {
		this.userController = userController;
		this.app = app;
	}

	mountV1() {
		// mount all
		const v1 = "/api/v1";

		// /api/v1/users
		const users = this.app.route(`${v1}/users`);
		// GET all users
		users.get(async (req, res) => {
			this.userController.getUsers(req, res);
		});
		// POST create new user
		users.post(async (req, res) => {
			this.userController.createUser(req, res);
		});

		// /api/v1/users/:userId
		const userId = this.app.route(`${v1}/users/:userId`);
		// GET user by id
		userId.get(async (req, res) => {
			this.userController.getUserById(req, res);
		});
		// PUT update user phone
		userId.put(async (req, res) => {
			this.userController.updateUserPhone(req, res);
		});
	}
}

module.exports = { UserRouter };
