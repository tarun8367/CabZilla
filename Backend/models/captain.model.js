const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 characters long😊"],
        },
        lastname: {
            type: String,
            minlength: [2, "Last name must be at least 2 characters long😊"],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please use a valid email address" 
        ],
        minlength: [5, "Email must be 5 characters long😊"],
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    SocketId: {
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 characters long😊"],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate must be at least 3 characters long😊"],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1😊"],
        },
        vehicleType: {
            type: String,
            enum: ['car', 'motorcycle', 'auto'],
            required: true,
    },
    },

    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    },
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
};

captainSchema.methods.comparePassWord = async function(password) {
    return await bcrypt.compare(password, this.password);
};  

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}; 

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;