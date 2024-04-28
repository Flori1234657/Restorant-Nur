const express = require("express");
const router = express.Router();
const FoodCard = require("../models/foodCard");
const PromoCard = require("../models/promoCard");

router.get("/food-cards", async (req, res) => {
  try {
    const foods = await FoodCard.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: "An error occurred!" });
  }
});

router.get("/promo-cards", async (req, res) => {
  try {
    const promos = await PromoCard.find();
    res.status(200).json(promos);
  } catch (error) {
    res.status(500).json({ message: "An error occurred!" });
  }
});

module.exports = router;
