const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('Christ is King!')
})

module.exports = router;