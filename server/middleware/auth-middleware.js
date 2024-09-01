const jwt = require("jsonwebtoken");
const User = require('../models/user_model');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ message: "Authorization token not provided" });
    }

    const token = authHeader.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({ email: isVerified.email });

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        console.error("JWT verification failed:", error);  // Optional: Logging
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authMiddleware;
