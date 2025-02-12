// Controllers are basically going to control whatever that particular route is doing, the status its sending, what
// it's sending back, any headers we want to send and it's also going to interact with the model since it'll get the 
// data from the model to send back.

const Product = require("../models/productModel")

async function getProducts(req, res) {
    try {
        const products = await Product.findAll()

        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts
}

