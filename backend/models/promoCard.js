const mongoose = require("mongoose");

const promoCardShcema = new mongoose.Schema({
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
  persons: {
    type: Number,
    required: true,
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
  type: {
    type: String, // Economic | Other types...
    required: true,
  },
});

const PromoCard = mongoose.model("PromoCard", promoCardShcema);

module.exports = PromoCard;
