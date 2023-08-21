const express = require("express");
const { register, login } = require("./auth.controller");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.render("login-form");
});
authRouter.post("/login", (req, res) => {
  login(req, res);
});

authRouter.get("/register", (req, res) => {
  res.render("register-form");
});
authRouter.post("/register", (req, res) => {
  register(req, res);
});

authRouter.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("login");
});

module.exports = authRouter;
