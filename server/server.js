const express = require("express")
const app = express()
require("./config/connect")
require('dotenv').config()



const PORT = process.env.PORT 
app.listen(PORT,()=>{console.log(`Server Active On Port : ${PORT} *_*`)})