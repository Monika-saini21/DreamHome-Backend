
const User = require("../models/User");
const Property = require("../models/Property");

// ADD FAVORITE
const addFavorite = async (req, res) => {
  try {
    const { propertyId } = req.params;

    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { favorites: propertyId },
    });

    res.status(200).json({
      success: true,
      message: "Property added to favorites",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET FAVORITES
const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("favorites");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      favorites: user.favorites,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// REMOVE FAVORITE
const removeFavorite = async (req, res) => {
  try {
    const { propertyId } = req.params;

    await User.findByIdAndUpdate(req.user.id, {
      $pull: { favorites: propertyId },
    });

    res.status(200).json({
      success: true,
      message: "Property removed from favorites",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite,
};
