const mongoose = require("mongoose")
const { ObjectId } = mongoose

// hobi, alamat, nomor_telpon

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    hobi: String,
    alamat: String,
    nomor_telpon: {
        type: Number,
        trim: true,
    } 
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)