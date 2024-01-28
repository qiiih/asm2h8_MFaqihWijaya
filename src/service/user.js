class UserService {
	constructor(userRepo, cryptoService) {
		this.userRepo = userRepo;
		this.cryptoService = cryptoService;
	}

	async createUser(user) {
		try {
			await this.userRepo.createUser(user);
		} catch (error) {
			throw error;
		}
	}

	async getUsers() {
		try {
			const users = await this.userRepo.getUsers();
			return users;
		} catch (error) {
			throw error;
		}
	}

	async updateUserPhone(user) {
		try {
			const affected = await this.userRepo.updateUserPhone(user);
			return affected;
		} catch (error) {
			throw err;
		}
	}

	async getUserById(userId) {
		try {
			const user = await this.userRepo.getUserById(userId);
			return user;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = { UserService };
