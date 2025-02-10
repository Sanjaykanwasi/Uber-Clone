const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: [true, "First Name is required"],
      minlength: [3, "First Name should contain atleast 3 characters."],
    },
    lastname: {
      type: String,
      minlength: [3, "Last Name should contain atleast 3 characters."],
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
    minlength: [8, "Password should contain atleast 8 characters."],
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: [true, "Color is required"],
      minlength: [3, "Color should contain atleast 3 characters."],
    },
    plate: {
      type: String,
      required: [true, "Plate is required"],
      minlength: [3, "Plate should contain atleast 3 characters."],
    },
    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: [1, "Capacity should be atleast 1."],
    },
    vehicleType: {
      type: String,
      enum: ["car", "bike", "auto"],
      required: [true, "Vehicle Type is required"],
    },
  },
  location: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bycrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bycrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;
