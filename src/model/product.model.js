const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    details: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Product", productSchema)