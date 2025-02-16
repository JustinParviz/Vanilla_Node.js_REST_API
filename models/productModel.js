// Models deal with data (in this case we're dealing with a JSON file), so these functions will strictly be used 
// to either Get data or Create or Update or Delete data.

const products = require("../data/products")

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

module.exports = {
    findAll,
    findById
}



