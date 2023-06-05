const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model");
db.role = require("./userRole.model");
db.ROLES = ["user", "admin", "moderator"];

db.report = require("./report.model.js")(mongoose);

module.exports = db;