//create mongooose model class which is the User collection
const mongoose = require("mongoose");
// const mongoose = require("mongoose");
const { Schema } = mongoose;
//const Schema = mongoose.Schema; is the same to line 3
const userSchema = new Schema({
  googleId: String,
  email: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
