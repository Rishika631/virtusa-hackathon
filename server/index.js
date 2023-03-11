
//import aposToLexForm from "apos-to-lex-form";
//import { WordTokenizer, SentimentAnalyzer, PorterStemmer } from "natural";
//import SpellCorrector from "spelling-corrector";
//import stopword from "stopword";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const EmpModel = require("./models/emp");


const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://rishika:Rishika06@cluster0.lmfgunj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
  console.log("Connection successful");
  }
  );



  app.get("/getemp", (req, res) => {
    EmpModel.find({}).then((err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
  



/* for html 
app.get("/", (req, res) => {
    res.render('/index.html');
  });*/


app.post("/createemp", async (req, res) => {
  const emp = req.body;
  const newemp = new EmpModel(emp);
  const user=await newemp.save();
  res.json(user);
});

app.delete("/deleteemp", async (req, res) => {
  const emp = req.body;
  const deleteemp = new EmpModel(emp);
  EmpModel.findOneAndRemove(emp).then((result) => {
    console.log("delete done"+JSON.stringify(result))
  }).catch((err) => {
    console.log("error");
  })
  res.json("deleted successfully!!!");
});

app.listen(8004, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

/*front end part <button onClick={(event) => {
          {createUser};
          setScore(getSentiment(review));
        }}>Create User </button>*/







