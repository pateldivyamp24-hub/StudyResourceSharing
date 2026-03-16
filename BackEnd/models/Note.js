const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    file:{
        type:String
    },
    uploadedBy:{
        type:String
    },
    downloads:{
        type:Number,
        default:0
    }
},{timestamps:true});

module.exports = mongoose.model("Note",NoteSchema);