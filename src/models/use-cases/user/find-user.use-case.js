const UserRepository = require("../../repositories/user.repository");

async function findUser(payload) {
  return UserRepository.findOne({
    where: payload,
    relations: { books: true },
  });
}

module.exports = findUser;
