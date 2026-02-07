const mongoose = require("mongoose")

const nodeSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const nodeMOdel = mongoose.model("nodes", nodeSchema)

module.exports = nodeMOdel