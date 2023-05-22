const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const cookieSession = require("cookie-session");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "mappet-session",
    secret: process.env.COOKIE_SECRET, // should use as secret environment variable
    httpOnly: true
  })
);


const db = require("./models");
// const Role = db.roles;
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    // initial();
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello World.!!." });
});

require("./routes/report.routes")(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }
//
//         console.log("added 'user' to roles collection");
//       });
//
//       new Role({
//         name: "moderator"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }
//
//         console.log("added 'moderator' to roles collection");
//       });
//
//       new Role({
//         name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }
//
//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }
