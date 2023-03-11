const express = require("express");
const app = express();
const mongoose = require("mongoose");
const EmpModel = require("./models/emp");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://rishika:Rishika06@cluster0.lmfgunj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`connection sucessful`);
  });

app.get("/search", (req, res) => {
  const emp = req.body;
  const newemp = new EmpModel(emp);
  EmpModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// app.post("/createUser", async (req, res) => {
//   const user = req.body;
//   const newUser = new UserModel(user);
//   await newUser.save();

//   res.json(user);
// });

app.listen(4001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

/* <div className="usersDisplay">
      {listOfUsers
        .filterbycompany((value) => {
          if (searchSreet === "") {
            return value.company;
          } else if (value.company.toLowerCase().includes(searchSreet.toLowerCase())) {
            return value.company;
          }
          return null;
        })*/
