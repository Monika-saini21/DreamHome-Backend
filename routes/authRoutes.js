
const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  updateProfile,
  changePassword,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile", protect, updateProfile);
router.put("/change-password", protect, changePassword);

// Protected profile API
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "You are logged in!",
    user: req.user,
  });
});

module.exports = router;
