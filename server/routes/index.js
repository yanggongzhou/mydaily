const express = require('express')

const router = express.Router()

const handle = require('./handle')





router.post('/login', handle.loginIn)
router.get('/getJsonList', handle.getJsonList)
router.get('/searchList' , handle.searchList)
router.get('/programList', handle.programList)
module.exports = router