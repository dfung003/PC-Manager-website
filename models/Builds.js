const { Schema, model } = require('mongoose');

// PC Build Schema

const buildSchema = new Schema({
    userId: String,
    buildName: String,
    motherboard: String,
    processor: String,
    graphicsCard: String,
    upToDate: Boolean
});

// PC Builder model

const Build = model("Build", buildSchema);

module.exports = Build;