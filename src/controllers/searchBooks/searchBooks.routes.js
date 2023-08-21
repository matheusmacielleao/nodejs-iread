const express = require("express");
const searchBooks = require("./searchBooks.controller");

const searchBooksRouter = express.Router();

searchBooksRouter.get("/searchBooks", (req, res) => {
  res.render("search-books", { data: undefined });
});

searchBooksRouter.post("/searchBooks", (req, res) => {
  searchBooks(req, res);
});

module.exports = searchBooksRouter;
