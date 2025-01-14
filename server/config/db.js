const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB connected...");
        })
        .catch((error) => {
            console.error(error.message);
        });
};

module.exports = connectDB;
