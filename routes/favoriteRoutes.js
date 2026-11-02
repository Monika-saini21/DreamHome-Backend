
const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  addFavorite,
  getFavorites,
  removeFavorite,
} = require("../controllers/favoriteController");

router.get("/", protect, getFavorites);
router.post("/:propertyId", protect, addFavorite);
router.delete("/:propertyId", protect, removeFavorite);

module.exports = router;
