const UserRepository = require("../../repositories/user.repository");

async function unlikeBook(bookId, user) {
  user.books = user.books.filter((book) => book.id != bookId);
  await UserRepository.save(user);
  return user;
}

module.exports = unlikeBook;
