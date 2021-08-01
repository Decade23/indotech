const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()
const { readdirSync } = require("fs")

// app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
})
.then(() => console.log("success connect DB"))
.catch(() => console.log("error connecting into db"))

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json({limit: "2mb"}))
app.use(cors())

//routes autoloading
const prefix = "/api";
readdirSync("./routes").map( (r) => app.use(prefix, require("./routes/" + r)) )

// running apps
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`running on ${port}`) )