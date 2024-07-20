const mongoose = require('mongoose'); 

const postSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    author: {
        type: String, 
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    }, 
    image: {
        type: String, 
        required: true
    }, 
    public_id: {
        type: String, 
        required: true
    }, 
    authorId :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    purchasedBy: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User"
        }
    ]
}, {timestamps: true} ); 

module.exports = mongoose.model("Post", postSchema); 