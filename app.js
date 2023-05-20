const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());


const mongoURL = "mongodb://atlas-sql-646793c67384ab080697bd3f-on9cc.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin"

mongoose.connect(mongoURL, {
    useNewUrlParser: true
}).then(() => console.log("Connected to database"))
.catch(e => console.log(e));

app.listen(5000, () => {
    console.log("Server started");
});

app.post("/post", async (req,resp) => {
    console.log(req.body);
});


//registering a user using node
require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/node",  async (req, res) => {

    const {name, email, mobile} = req.body;
    try{
        await User.create({
            uname: name,
            email,
            phone: mobile,
        });
        res.send({status: "Ok!"});
    } catch (error) {
        res.send({status: "Error!"});
    }
});
