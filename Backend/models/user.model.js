const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Your First Name should contain atleast 3 characters."],
    },
    lastname: {
      type: String,
      minlength: [3, "Your Last Name should contain atleast 3 characters."],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Your Email should contain atleast 5 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [8, "Your password should contain atleast 8 characters."],
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
