async function getBooksFromApi(name) {
  const books = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${name}`
  ).then(async (response) => await response.json());

  return books.items;
}

module.exports = getBooksFromApi;
