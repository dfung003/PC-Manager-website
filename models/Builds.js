const { Schema, model } = require('mongoose');

// PC Build Schema

const buildSchema = new Schema({
    userId: String,
    name: String,
    case: String,
    motherboard: String,
    memory: String,
    processor: String,
    cpuCooler: String,
    powerSupply: String,
    graphicsCard: String,
    storage: String,
    upToDate: Boolean
});

// PC Builder model

const Build = model("Build", buildSchema);

module.exports = Build;