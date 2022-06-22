const express = require("express")

const router = express.Router();
const names = ["me", "you", "them", "us", "her", "him", "they", "y'all"]

router.post("/:tuples", async(req, res) => {
    const results = await GiftExchange.pairs(req.body.names)
    res.status(200).json({results})
  })

module.exports= router;

//   router.post('/traditional', (req, res, next) => {
//     res.status(200).json({names})
    
//   })


  