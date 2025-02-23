const mongoose = require("mongoose")
const dotenv=require('dotenv');
require('dotenv').config()  
const uri = process.env.MONGODB_URI;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000 // Correct way to set timeout
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));


const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    profilepic: {
        type: String,
        default: "image_profile.png"
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
            default: []
        }
    ]
})

module.exports = mongoose.model("user", userSchema)