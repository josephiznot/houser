require("dotenv").config();
const massive = require("massive");
const express = require("express");
const app = express();
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");

const port = process.env.PORT || 3001;
const controller = require("./controller");

app.use(express.static(__dirname + "./../build"));
app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbi => {
  app.set("db", dbi);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    authorizedUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 3 * 24 * 60 * 1000 //3 days
    }
  })
);

app.use((req, res, next) => {
  if (!req.session.form) {
    req.session.form = [];
  }
  next();
});

app.get("/api/products", controller.getter);
app.post("/api/addform", controller.postForm);
app.delete("/api/deleteform/:id", controller.deleteForm);
app.put("/api/editdata", controller.editme);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
