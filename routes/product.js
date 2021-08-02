const express = require("express")
const routes = express.Router()

const { sumStock, getProducts, getProductsStock } = require("../controllers/product")

routes.get("/products", getProducts)
routes.get("/product/stock", getProductsStock)
routes.get("/product/sum-stock", sumStock)

module.exports = routes