const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const routes = require("./routes");
const cors = require("cors")

const app = express();

app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "abc123",
  database: "library"
}

//middlewares--------------------
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors());

//routes--------------------
app.get("/", (req, res) => {
  res.send("Welcome to My App with nodemon");
});

app.use("/api", routes);

//server running--------------------
app.listen(app.get("port"), () => console.log("server runing on port", app.get("port")))