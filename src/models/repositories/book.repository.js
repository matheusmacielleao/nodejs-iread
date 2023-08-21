const database = require("../../database");

const BookRepository = database.getRepository("Book");

module.exports = BookRepository;
