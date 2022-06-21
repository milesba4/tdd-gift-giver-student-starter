const express = require("express")
const app = express()
const morgan = require("morgan")
const router = express.Router();

module.exports=app // exporting app to server.js
app.use(morgan("tiny"))
app.use(express.json())
app.use("/", router);

router.get('/', (req, res) => {
    res.send({ "ping": "pong" },"status:200")
  })
