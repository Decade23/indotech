const express = require("express")

const routes = express.Router()

const {
    lists,
    create,
    read,
    update,
    remove } = require("../controllers/user")

routes.get("/users", lists)
routes.get("/user/:id", read)
routes.post("/user", create)
routes.put("/user/:id", update)
routes.delete("/user/:id", remove)

module.exports = routes