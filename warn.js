const { Schema, model } = require("mongoose");

const warn = new Schema({
    guildID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    report: {
        type: Array,
        required: true
    }
});

module.exports = model("warn", warn);