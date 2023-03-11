
//import aposToLexForm from "apos-to-lex-form";
//import { WordTokenizer, SentimentAnalyzer, PorterStemmer } from "natural";
//import SpellCorrector from "spelling-corrector";
//import stopword from "stopword";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jobModel = require("./models/emp");


const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
   // "mongodb+srv://rishika:Rishika06@cluster0.lmfgunj.mongodb.net/?retryWrites=true&w=majority"
   "mongodb://127.0.0.1:27017"
    
  );


  app.get("/getemp", (req, res) => {
    jobModel.find({}, (err, result) => {
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
  const job = req.body;
  const newjob = new jobModel(job);
  const user=await newjob.save();
  res.json(user);
});

app.listen(8004, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

/*front end part <button onClick={(event) => {
          {createUser};
          setScore(getSentiment(review));
        }}>Create User </button>*/







