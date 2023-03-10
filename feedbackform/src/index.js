//const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const static_path = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));


app.set("view engine", "html")

//dotenv.config({ path: "./config.env" });
mongoose
  .connect("mongodb+srv://rishika:Rishika06@cluster0.lmfgunj.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log(`connection sucessful`);
  })
  .catch((err) => console.log(err));
const fb = require("../model/fb");
app.use(express.json());


app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", async(req, res) => {
    try {
        const feedback = new fb({
          name: req.body.name,
            email: req.body.email,
            company: req.body.company,
            phone: req.body.phone,
            message: req.body.message,
        })
        const fbform = await feedback.save();
        //res.json(fb);
        res.redirect("/");

    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(8080, () => {
  console.log(`server is listening ON 8000`);
});
