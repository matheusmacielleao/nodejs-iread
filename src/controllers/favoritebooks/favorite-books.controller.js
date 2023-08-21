const saveOrFindBook = require("../../models/use-cases/book/save-find-book.use-case");
const likeBook = require("../../models/use-cases/user/like-book.use-case");
const unlikeBook = require("../../models/use-cases/user/unlike-book.use-case");

async function favoriteBook(req, res) {
  const bookData = req.body;
  const user = req.session.user;
  const book = await saveOrFindBook(bookData);

  const updatedUser = await likeBook(user, book);
  req.session.user = updatedUser;
  res.status(204).send({});
}

async function unfavoriteBook(req, res) {
  const { bookId } = req.body;
  const user = req.session.user;
  const updatedUser = await unlikeBook(bookId, user);
  req.session.user = updatedUser;
  res.redirect("/favoriteBooks");
}

module.exports = { favoriteBook, unfavoriteBook };
