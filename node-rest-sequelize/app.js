const express = require("express");
const cors = require("cors");
const app = express();

const sequelize = require("./util/database");
const User = require('./models/user');

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


const userRoutes = require('./routes/user');

app.use('/user', userRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 8080;


sequelize.sync()
  .then(() => {
    console.log("Synced db.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });