// Controllers are basically going to control whatever that particular route is doing, the status its sending, what
// it's sending back, any headers we want to send and it's also going to interact with the model since it'll get the 
// data from the model to send back.

const Product = require("../models/productModel")

// @desc    Gets All Products
// @route   GET /api/products
async function getProducts(req, res) {
    try {
        const products = await Product.findAll()

        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets Single Product
// @route   GET /api/products/:id
async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ message: "Product Not Found" }))
        } else {
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a Product
// @route   POST /api/products
async function createProduct(req, res) {
    try {
        const product = {
            title: "Test Product",
            description: "This is my product",
            price: 100
        }

        const newProduct = await Product.create(product)

        res.writeHead(201, { "Content-Type": "application/json" })
        return res.end(JSON.stringify(newProduct))

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}

