const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout.js");

// Get all workouts
router.get("/", (req, res) => {
    res.send("GET all the guys workout");
});

// Get a single workout by ID
router.get("/:id", (req, res) => {
    res.send("GET a single guys workout using id");
});

// Post a new workout
router.post("/", async (req, res) => {
    const { title, load, reps } = req.body; // Make sure to use 'load' instead of 'loads'

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout); // Send the created workout as response with status 200
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message }); // Error response
    }
});

// Delete a workout by ID
router.delete("/:id", (req, res) => {
    res.send("DELETE a single guys workout using id");
});

// Update a workout by ID
router.patch("/:id", (req, res) => {
    res.send("UPDATE a single guys workout using id");
});

module.exports = router;
