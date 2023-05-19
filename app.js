const express = require("express");
const app = express();

app.use(express.json());

app.listen(5000, () => {
    console.log("Server started");
});

app.post("/post", async (req,resp) => {
    console.log(req.body);
});

