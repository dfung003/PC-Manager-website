const { Schema, model } = require('mongoose');

const reviewsSchema = new Schema({
    author: String,
    productName: String,
    entry: String,
    rating: { type: Number, enum: [1,2,3,4,5], default: 5 }
})

const Review = model("Review", reviewsSchema);

module.exports = Review;