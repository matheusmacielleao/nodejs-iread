const HttpError = require("../../../errors/http.error");
const UserRepository = require("../../repositories/user.repository");

async function createUser({ nick, name, password }) {
  const userExists = await UserRepository.findOne({ where: { nick } });

  if (userExists) {
    throw new HttpError(`User with nickName ${nick} already exists`, 400);
  }

  const newUser = { nick, name, password };

  return UserRepository.save(newUser);
}

module.exports = createUser;
