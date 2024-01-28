const { Sequelize } = require("sequelize");

async function connectDb(config) {
	const sqlizeConnection = new Sequelize(
		config.database,
		config.user,
		config.pass,
		{
			host: config.host,
			port: config.port,
			dialect: "postgres",
		}
	);
	try {
		await sqlizeConnection.authenticate();
	} catch (error) {
		throw new Error(error.message);
	}
	return sqlizeConnection;
}

module.exports = { connectDb };
