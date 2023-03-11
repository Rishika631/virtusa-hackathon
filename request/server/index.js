
//import aposToLexForm from "apos-to-lex-form";
//import { WordTokenizer, SentimentAnalyzer, PorterStemmer } from "natural";
//import SpellCorrector from "spelling-corrector";
//import stopword from "stopword";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fbModel = require("./models/fb");


const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://rishika:Rishika06@cluster0.lmfgunj.mongodb.net/?retryWrites=true&w=majority"
    
  );


 app.get("/", (req, res) => {
    fbModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
  



// for html 
app.get("/", (req, res) => {
    res.render('/index.html');
  });


app.post("/createemp", async (req, res) => {
  const fb = req.body;
  const newfb = new fbModel(fb);
  const user=await newfb.save();
  res.json(user);
});

app.listen(8081, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

/*front end part <button onClick={(event) => {
          {createUser};
          setScore(getSentiment(review));
        }}>Create User </button>*/







