require("dotenv").config();

const mongoose = require("mongoose");
const Property = require("./models/Property");

const properties = [
  {
    title: "Modern Luxury Villa",
    description: "Beautiful villa with modern interior and garden.",
    price: 8500000,
    location: "Chandigarh",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    status: "For Sale",
  },
  {
    title: "Beautiful Family House",
    description: "Spacious family house in a peaceful location.",
    price: 6500000,
    location: "Mohali",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    status: "For Sale",
  },
  {
    title: "Premium Apartment",
    description: "Premium apartment with beautiful city views.",
    price: 4500000,
    location: "Panchkula",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    status: "For Sale",
  },
  {
    title: "Green Garden House",
    description: "Comfortable house with a beautiful garden.",
    price: 5500000,
    location: "Chandigarh",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    status: "For Sale",
  },
  {
    title: "Luxury City Apartment",
    description: "Modern apartment close to city facilities.",
    price: 3500000,
    location: "Mohali",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    area: 1100,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
    status: "For Sale",
  },
  {
    title: "Premium Farm Villa",
    description: "Large villa with spacious outdoor area.",
    price: 12000000,
    location: "Panchkula",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
    status: "For Sale",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Remove previous sample properties and insert fresh ones
    await Property.deleteMany({});

    await Property.insertMany(properties);

    console.log("Sample Properties Added Successfully!");

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedData();