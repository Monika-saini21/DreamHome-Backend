
const Inquiry = require("../models/Inquiry");
const Property = require("../models/Property");
const User = require("../models/User");

// CREATE INQUIRY
const createInquiry = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const inquiry = await Inquiry.create({
      user: user._id,
      property: property._id,
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Inquiry sent successfully!",
      inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET MY INQUIRIES
const getMyInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({
      user: req.user.id,
    }).populate("property", "title location price image");

    res.status(200).json({
      success: true,
      inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createInquiry,
  getMyInquiries,
};
