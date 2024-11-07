const express = require("express");
const router = express.Router();
const User = require("./models/User"); // Make sure User model is correctly imported

// Get all users
router.get("/", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

// Routes for specific user by ID
router
  .route("/:id")

  // Get user by ID
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  })

  // Update user by ID
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: req.body.last_name });
    return res.json({ status: "Success" });
  })

  // Delete user by ID
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });

// Create new user
router.post("/", async (req, res) => {
  const body = req.body;

  // Validate required fields
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "Success" });
});

module.exports = router;
