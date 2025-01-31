const express = require("express")
const cors = require('cors');

const app = express()

require("./config/connect")
require('dotenv').config()

const authRoutes = require('./routes/authRoute.js');



//middlwaere :
app.use(express.json());
app.use(cors());



// routes : 
app.use('/api/auth',authRoutes);


const PORT = process.env.PORT 
app.listen(PORT,()=>{console.log(`Server Active On Port : ${PORT} *_*`)})