const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const database = require("./database");
const authRouter = require("./controllers/auth/auth.routes");
const favoriteBooksRouter = require("./controllers/favoritebooks/favorite-books.routes");
const searchBooksRouter = require("./controllers/searchBooks/searchBooks.routes");

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    cookie: { maxAge: oneDay },
    resave: true,
    saveUninitialized: true,
  })
);

database.initialize();

app.use(authRouter);
app.use(favoriteBooksRouter);
app.use(searchBooksRouter);
app.listen(3000);
