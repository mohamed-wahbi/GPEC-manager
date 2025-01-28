const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.DBURL)
.then(()=>{console.log("Connection To DB *_*")})
.catch((err)=>{console.log(err)})

module.exports= mongoose