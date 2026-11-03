
const express = require("express");
const router = express.Router();

const {
  addProperty,
  updateProperty,
  deleteProperty,
  getAllInquiries,
  updateInquiryStatus,
  getAllContactMessages,
  updateContactStatus,
  getAllUsers,
  updateUserRole,
  deleteUser,
} = require("../controllers/adminController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

// Property Management
router.post("/properties", protect, adminOnly, addProperty);
router.put("/properties/:id", protect, adminOnly, updateProperty);
router.delete("/properties/:id", protect, adminOnly, deleteProperty);

// Inquiry Management
router.get("/inquiries", protect, adminOnly, getAllInquiries);
router.put("/inquiries/:id", protect, adminOnly, updateInquiryStatus);

// Contact Message Management
router.get("/messages", protect, adminOnly, getAllContactMessages);
router.put("/messages/:id", protect, adminOnly, updateContactStatus);

// User Management
router.get("/users", protect, adminOnly, getAllUsers);
router.put("/users/:id", protect, adminOnly, updateUserRole);
router.delete("/users/:id", protect, adminOnly, deleteUser);

module.exports = router;
