const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/admin";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
const customerroutes = require("./routers/customers.js");

con.on("open", () => {
    console.log("connected...");
});

app.listen(9000, () => {
    console.log("Server started");
});

app.use("/customers", customerroutes);