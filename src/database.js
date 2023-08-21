const typeorm = require("typeorm");

const database = new typeorm.DataSource({
  type: "sqlite",
  database: "sqlite3",
  entities: ["src/models/entities/*.js"],
  synchronize: true,
});

module.exports = database;
