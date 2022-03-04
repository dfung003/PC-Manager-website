const { Schema, model } = require('mongoose');

// PC Build Schema

const pcBuildsSchema = new Schema({
    userId: String,
    buildName: String,
    motherboard: String,
    processor: String,
    graphicsCard: String,
    upToDate: Boolean
});

// PC Builder model

const PcBuild = model("PcBuild", pcBuildsSchema);

module.exports = PcBuild;