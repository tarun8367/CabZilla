const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token });

    if (isBlacklisted) {    
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decodedToken._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token });

    if (isBlacklisted) {    
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decodedToken._id);

        req.captain = captain;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}