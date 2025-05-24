const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobilenumber: { type: String, required: true },
  profileimg: {
    type: String,
    default: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
  },
  purchases: [{
    type: mongoose.Types.ObjectId,
    ref: "purchases"
  }], favourites:[{
        type:mongoose.Types.ObjectId,
        ref:"courses"
    }],
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  },
  qualification: { // only for teachers
    type: String,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);
