const express = require("express");
const router = express.Router();
const Student = require("../models/Student"); 

//  POST: Register a Student
router.post("/register", async (req, res) => {
    try {
        const { name, age, email, city, phone } = req.body;

        // Validate input
        if (!name || !age || !email || !city || !phone) {
            return res.status(400).json({ message: " All fields are required!" });
        }

        // Save to MongoDB
        const newStudent = new Student({ name, age, email, city, phone });
        await newStudent.save();

        res.status(201).json({ message: " Registered successfully!", data: newStudent });
    } catch (error) {
        console.error(" Error:", error);
        res.status(500).json({ message: "Server error. Try again." });
    }
});

// GET: Retrieve All Students
router.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: " Error fetching students", error: error.message });
    }
});

module.exports = router;
