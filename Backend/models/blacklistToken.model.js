const mongoose = require("mongoose");
// Create schema for blacklisting jwt tokens and have ttl of 24 hours
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400,
    },
});
module.exports = mongoose.model('blacklistToken', blacklistTokenSchema);
