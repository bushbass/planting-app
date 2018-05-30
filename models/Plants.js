const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    plant_name: String,
    plant_location: String,
    planting_date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Plant', PlantSchema)