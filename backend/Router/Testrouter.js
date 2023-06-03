
const express=require("express")

const schemafunction=require("../Controller/Testcontroller")
// const generatefun = require("../Controller/Tokengenerate")

const router=express.Router()
//  router.route('/user').post(generatefun)
router.route('/').post(schemafunction)
module.exports= router