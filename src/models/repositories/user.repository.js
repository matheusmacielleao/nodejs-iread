const database = require("../../database");

const UserRepository = database.getRepository("User");

module.exports = UserRepository;
