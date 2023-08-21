const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Book",
  tableName: "book",
  columns: {
    id: {
      primary: true,
      type: "varchar",
    },
    title: {
      type: "varchar",
    },
    description: {
      type: "varchar",
      unique: true,
    },
    image_url: {
      type: "varchar",
    },
  },
});
