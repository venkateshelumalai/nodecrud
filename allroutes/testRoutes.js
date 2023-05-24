let express = require("express");
let testRouter = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const mongo = require('../allservices/mongoconnect.js');
const tokenVerify = require("../allservices/tokenVerify");




testRouter.use("*", function checkSession(req, res, next) {
    if (
        req.body.sessionToken ||
        req.query.sessionToken ||
        req.headers["authorization"]
    ) {
        tokenVerify(req, res, next);
    } else {

        res.send({ auth: false });
    }
});


// Define Product model and schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobilenumber: {
        type: String,
        // required: true, // Not mandatory
    }
});

const Product = mongoose.model('Productmaster', productSchema);


// Get all products
testRouter.get('/products', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(products);
        }
    });
});


// Create a new product
testRouter.post('/products', (req, res) => {
    const { name, email, mobilenumber } = req.body;

    const newProduct = new Product({ name, email, mobilenumber });

    newProduct.save((err, product) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(product);
        }
    });
});


// Update a product
testRouter.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const { name, email, mobilenumber } = req.body;

    Product.findByIdAndUpdate(productId, { name, email, mobilenumber }, { new: true }, (err, product) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else if (!product) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(product);
        }
    });
});




// Delete a product
testRouter.delete('/products/:id', (req, res) => {
    const productId = req.params.id;

    Product.findByIdAndRemove(productId, (err, product) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else if (!product) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json({ message: 'Product deleted successfully' });
        }
    });
});


testRouter.use(function (req, res) {
    res.send("Error");
});

module.exports = testRouter;