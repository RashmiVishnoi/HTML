const mongoose = require("mongoose");


const Admin = new mongoose.Schema({
    id: { type: mongoose.SchemaTypes.ObjectId, required: true,
    default: mongoose.SchemaTypes.ObjectId.get(), },
    email: { type: String, required: true,},
    password: { type: String, required: true,}
})

module.exports = mongoose.model("admin", Admin, "admin");