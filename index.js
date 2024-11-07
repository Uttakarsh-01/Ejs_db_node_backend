const express = require("express");
const fs = require("fs");
const users = require("./ran.json");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const {logReqRes} = require("./middlewares")

//connections

const {} = require("./connection");
const userRouter = require("./routes/user");
const { connect } = require("mongoose");
const { connectMongoDb } = require("../connections");

//here

connectMongoDb("mongodb://127.0.0.1:27017/mydatabase");



const userRouter = require("./routes/user")

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error:", err));

// // Define User Schema
// const userSchema = new mongoose.Schema({
//     first_name: { type: String, required: true },
//     last_name: { type: String },
//     email: { type: String, required: true, unique: true },
//     job_title: { type: String },
//     gender: { type: String },
// },{timestamps: true});

// const User = mongoose.model("User", userSchema);

// Middleware - Plugins
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    fs.appendFile("log.txt", `${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`, (err) => {
        if (err) console.error("Logging error:", err);
        next();
    });
});

// Routes
// app.get("/users", (req, res) => {
//     const html = `<ul>${users.map(user => `<li>${user.first_name}</li>`).join("")}</ul>`;
//     res.send(html);
// });

// // REST API
// app.get("/api/users", async (req, res) => {
//     try {
//         const allUsers = await User.find();
//         res.setHeader("X-MyName", "uttakarsh"); // Custom Header
//         return res.json(allUsers);
//     } catch (error) {
//         return res.status(500).json({ error: "Failed to fetch users" });
//     }
// });

// app.route("/api/users/:id")
//     .get(async (req, res) => {
//         try {
//             const user = await User.findById(req.params.id);
//             if (!user) return res.status(404).json({ error: "User not found" });
//             return res.json(user);
//         } catch (error) {
//             return res.status(500).json({ error: "Error fetching user" });
//         }
//     })
//     .patch(async (req, res) => {
//         try {
//             const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//             if (!updatedUser) return res.status(404).json({ error: "User not found" });
//             return res.json(updatedUser);
//         } catch (error) {
//             return res.status(500).json({ error: "Error updating user" });
//         }
//     })
//     .delete(async (req, res) => {
//         try {
//             const deletedUser = await User.findByIdAndDelete(req.params.id);
//             if (!deletedUser) return res.status(404).json({ error: "User not found" });
//             return res.json({ status: "User deleted", deletedUser });
//         } catch (error) {
//             return res.status(500).json({ error: "Error deleting user" });
//         }
//     });

// // POST route to create a new user
// app.post("/api/users", async (req, res) => {
//     const { first_name, last_name, email, gender, job_title } = req.body;

//     // Validate required fields
//     if (!first_name || !email) {
//         return res.status(400).json({ msg: "First name and email are required." });
//     }

//     try {
//         // Create a new user in MongoDB
//         const result = await User.create({
//             first_name,
//             last_name,
//             email,
//             gender,
//             job_title,
//         });

//         console.log("result", result);
//         return res.status(201).json({ msg: "success", user: result });
//     } catch (error) {
//         console.error("Error saving user:", error);
//         return res.status(500).json({ msg: "Error saving user", error: error.message });
//     }
// });



app.use("/user",userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
