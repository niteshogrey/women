const express=require("express")
const { getWomen } = require("../controller/women")
const router=express.Router()

router.get("/",getWomen) //home page


module.exports=router