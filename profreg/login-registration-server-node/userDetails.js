const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String,  required: true, unique: true },
    password: {type: String,  required: [true, "Please enter a password"]},
    userType: String,
  },
  {
    collection: "ProfInfo",
  }
);

mongoose.model("ProfInfo", UserDetailsScehma);
