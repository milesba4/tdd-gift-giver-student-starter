const express = require("express")
const app = express()
module.exports=app

const morgan = require("morgan")
module.exports=app // exporting app to server.js
app.use(morgan("tiny"))
