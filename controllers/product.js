const { produk, stok_product } = require("../models/Product")

const sumStock = (req, res) => {
    let r = [];
    let d = [];
    let ress = {}

    // group product and stock
    produk.map((p, i) => stok_product.map((sp, pi) => {
        if (p.id == sp.id_produk) { d.push({ nama_produk: p.nama_produk, qty: sp.qty }) }
    } ))
    
    // aggregate the qty by product
    d.reduce((re, v) => {
        if (!re[v.nama_produk]) {
            re[v.nama_produk] = { nama_produk: v.nama_produk, qty: 0 }
            r.push(re[v.nama_produk])
        }
        re[v.nama_produk].qty += v.qty
        return re
    }, {})

    ress.hasil = r

    res.json(ress)
}

const getProducts = (req, res) => {
    res.json(produk)
}

const getProductsStock = (req, res) => {
    res.json(stok_product)
}

module.exports = { sumStock, getProducts, getProductsStock }