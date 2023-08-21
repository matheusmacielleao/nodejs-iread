const createUser = require("../../models/use-cases/user/create-user.use-case");
const findUser = require("../../models/use-cases/user/find-user.use-case");

async function login(req, res) {
  const { nick, password } = req.body;
  const validUser = await findUser({ nick, password });

  if (!validUser) {
    redirect("/login");
  }

  req.session.user = validUser;

  res.redirect("/favoriteBooks");
}

async function register(req, res) {
  const { nick, name, password } = req.body;

  await createUser({ nick, name, password });

  res.redirect("/login");
}

module.exports = { login, register };
