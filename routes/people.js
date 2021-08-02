const express = require("express")
const routes = express.Router()

const {getPeople, update, findByName} = require("../controllers/people")

routes.get("/peoples", getPeople)
routes.put("/people", update)
routes.get("/people", findByName)

module.exports = routes