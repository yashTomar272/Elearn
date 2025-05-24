const mongoose = require("mongoose");

const purchasesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",  // Ensure this matches the "User" model name exactly
    required: true
  },
  courses: {
    type: mongoose.Types.ObjectId,
    ref: "courses",  // Ensure this matches the "Book" model name exactly
    required: true
  }
}, { timestamps: true });

module.exports=mongoose.model("purchases",purchasesSchema)