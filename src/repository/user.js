const { User } = require("../model/user");
const { DataTypes, where } = require("sequelize");

class UserPostgres {
	constructor(sequelize) {
		User.init(
			{
				username: DataTypes.STRING,
				fullname: DataTypes.STRING,
				dob: DataTypes.DATE,
				phone: DataTypes.STRING,
			},
			{ sequelize, modelName: "user", tableName: "users" }
		);
	}

	async createUser(user) {
		try {
			await User.create({
				username: user.username,
				fullname: user.fullname,
				dob: user.dob,
				phone: user.phone,
			});
		} catch (error) {
			throw error;
		}
	}

	async getUsers() {
		try {
			const users = await User.findAll({
				where: { deletedAt: null },
			});
			return users;
		} catch (error) {
			throw error;
		}
	}

	async getUserById(userId) {
		try {
			const user = await User.findOne({
				where: { id: userId, deletedAt: null },
			});
			return user;
		} catch (error) {
			throw error;
		}
	}

	async updateUserPhone(user) {
		try {
			const affected = await User.update(
				{ phone: user.phone },
				{
					where: {
						id: user.id,
						deletedAt: null,
					},
				}
			);
			return affected;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = { UserPostgres };
