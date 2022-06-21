const express = require("express")
const app = express()
const morgan = require("morgan")
module.exports=app // exporting app to server.js
app.use(morgan("tiny"))
app.use(express.json())