
const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  createInquiry,
  getMyInquiries,
} = require("../controllers/inquiryController");

router.post("/:propertyId", protect, createInquiry);
router.get("/my", protect, getMyInquiries);

module.exports = router;
