const express = require("express");
const { favoriteBook, unfavoriteBook } = require("./favorite-books.controller");

const favoriteBooksRouter = express.Router();

favoriteBooksRouter.get("/favoriteBooks", (req, res) => {
  res.render("favorite-books", { data: req.session.user.books });
});

favoriteBooksRouter.post("/favoriteBook", (req, res) => {
  favoriteBook(req, res);
});

favoriteBooksRouter.post("/unfavoriteBook", (req, res) => {
  unfavoriteBook(req, res);
});

module.exports = favoriteBooksRouter;
