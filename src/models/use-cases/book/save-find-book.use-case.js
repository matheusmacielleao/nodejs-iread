const BookRepository = require("../../repositories/book.repository");

async function saveOrFindBook({ id, title, description, image_url }) {
  const bookExists = await BookRepository.findOne({ where: { id } });

  if (bookExists) {
    return bookExists;
  }

  const newBook = { id, title, description, image_url };

  return BookRepository.save(newBook);
}

module.exports = saveOrFindBook;
