const Property = require("../models/Property");

// Get all properties with filters
const getProperties = async (req, res) => {
  try {
    const {
      location,
      type,
      minPrice,
      maxPrice,
      bedrooms,
      sort,
    } = req.query;

    let filter = {};

    if (location) {
      filter.location = {
        $regex: location,
        $options: "i",
      };
    }

    if (type && type !== "All") {
      filter.type = type;
    }

    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    if (bedrooms) {
      filter.bedrooms = {
        $gte: Number(bedrooms),
      };
    }

    let sortOption = {};

    if (sort === "low") {
      sortOption.price = 1;
    } else if (sort === "high") {
      sortOption.price = -1;
    } else {
      sortOption.createdAt = -1;
    }

    const properties = await Property.find(filter).sort(sortOption);

    res.status(200).json({
      success: true,
      total: properties.length,
      properties,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single property
const getSingleProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json({
      success: true,
      property,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProperties,
  getSingleProperty,
};