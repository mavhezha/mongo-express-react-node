const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
    {
        uname: String,
        email: String,
        phone: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", userDetailsSchema);