const getBooksFromApi = require("../../models/use-cases/book/get-books-from-api.use-case");

async function searchBooks(req, res) {
  const { bookName } = req.body;
  const books = await getBooksFromApi(bookName);
  res.render("search-books", { data: books });
}

module.exports = searchBooks;
