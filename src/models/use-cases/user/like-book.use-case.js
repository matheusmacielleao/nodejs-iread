const UserRepository = require("../../repositories/user.repository");

async function likeBook(user, book) {
  const updatedBooks = [book, ...user.books];
  user.books = updatedBooks;
  return UserRepository.save(user);
}

module.exports = likeBook;
