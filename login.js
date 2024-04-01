// var express = require("express");
// var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

// const app = express();

// app.use(bodyParser.json());
// app.use(express.static("./")); //public changed to /
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// mongoose.connect("mongodb://localhost:27017/Database");
// var db = mongoose.connection;
// db.on("error", () => console.log("Error in Connecting to Database"));
// db.once("open", () => console.log("Connected to Database"));

// app.post("/sign_up", (req, res) => {
//   var name = req.body.name;
//   var age = req.body.age;
//   var email = req.body.email;
//   var phno = req.body.phno;
//   var gender = req.body.gender;
//   var password = req.body.password;

//   var data = {
//     name: name,
//     age: age,
//     email: email,
//     phno: phno,
//     gender: gender,
//     password: password,
//   };
//   db.collection("users").insertOne(data, (err, collection) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Record Inserted Succesfully");
//   });
//   return res.redirect("signup_successful.html");
// });

// // app.get("/", (req, res) => {
// //     res.set({
// //       "Allow-acces-Allow-Origin": "*",
// //     });
// //     return res.redirect("loginReg.html");
// //   })
// //   .listen(3030);
// app
//   .get("/", (req, res) => {
//     const filePath = path.join(__dirname, "loginReg.html");
//     res.sendFile(filePath);
//   })
//   .listen(3030);
// console.log("Listening on port 3030");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static("./")); // public changed to /
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb+srv://soumyadipojha635:WZJOfLt8Cbf3rwbY@cluster0.njhxvfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0mongodb://localhost:27017/Database");
var db = mongoose.connection;
db.on("error", () => console.log("Error in Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

app.post("/sign_up", (req, res) => {
  var name = req.body.name;
  var age = req.body.age;
  var email = req.body.email;
  var phno = req.body.phno;
  var gender = req.body.gender;
  var password = req.body.password;

  var data = {
    name: name,
    age: age,
    email: email,
    phno: phno,
    gender: gender,
    password: password,
  };
  db.collection("users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Inserted Succesfully");
  });
  return res.redirect("dashboard.html");
});

app.get("/loginReg", (req, res) => {
  const filePath = path.join(__dirname, "dashboard.html");
  res.sendFile(filePath);
});

app.listen(3030, () => {
  console.log("Listening on port 3030");
});
