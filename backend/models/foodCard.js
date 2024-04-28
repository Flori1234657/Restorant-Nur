const mongoose = require("mongoose");

const foodCardShcema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isLiked: {
    type: Boolean,
    required: true,
  },
});

const FoodCard = mongoose.model("FoodCard", foodCardShcema);

module.exports = FoodCard;
