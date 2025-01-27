const express = require("express");
const app = express();
const workoutRoutes = require("./Routes/workout")
const mongoose = require("mongoose")
// Middleware
app.use((req, res, next) => {
    console.log(`Middleware: ${req.method} request to ${req.path}`);
    next(); // Pass to the next handler
});

app.use(express.json())

app.use("/api/workout", workoutRoutes )




mongoose.connect("mongodb+srv://Abhiramk:Pocom2%402004@cluster0.ugwhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Successfully connected to the database");
        
        // Start server
        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((error) => {
        console.log("Error connecting to the database:", error);
    });
