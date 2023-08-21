const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "user",
  columns: {
    nick: {
      primary: true,
      type: "varchar",
      size: 11,
    },
    name: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
  relations: {
    books: {
      name: "likedBooks",
      target: "Book",
      type: "many-to-many",
      joinTable: true,
      cascade: true,
    },
  },
});
