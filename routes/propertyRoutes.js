const express = require("express");

const router = express.Router();

const {
  getProperties,
  getSingleProperty,
} = require("../controllers/propertyController");

// Get all properties
router.get("/", getProperties);

// Get single property
router.get("/:id", getSingleProperty);

module.exports = router;
