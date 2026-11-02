
const ContactMessage = require("../models/ContactMessage");

const createContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newMessage = await ContactMessage.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully!",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createContactMessage };
