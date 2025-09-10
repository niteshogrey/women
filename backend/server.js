const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDb")
const { connect } = require("mongoose")

const PORT=process.env.PORT || 3000
connectDb()

app.use("/women",require("./routes/women"))
app.listen(PORT,(err)=>{
    console.log(`app is listing on port ${PORT}`)
})