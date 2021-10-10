const express = require("express");
const router = express.Router();
const Customer = require("../models/customers");

router.get("/", async(req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.send("Error " + err);
    }
});

module.exports = router;