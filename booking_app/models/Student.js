const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;

