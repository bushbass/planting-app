const express = require("express");
const router = express.Router();
const monogoose = require("mongoose");
const Plant = require("../models/Plants.js");

// GET ALL PRODUCTS
router.get("/", (req, res, next) => {
  Plant.find((err, plants) => {
    if (err) return next(err);
    res.json(plants);
  });
});

// GET SINGLE PLANT
router.get('/:id', (req, res, next) => {
  Plant.findById( req.params.id, (err, plant) => {
    if (err) return next(err)
    res.json(plant)
  })
})

// CREATE NEW PLANT
router.post('/', (req, res, next) => {
  Plant.create(req.body, (err, plant) => {
    if (err) return next(err)
    res.json(plant)
  })
})

module.exports = router