const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successfully to DB");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(0); // Exit process with failure
    }
};

module.exports = connectDb;
