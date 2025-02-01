const express = require("express")
const cors = require('cors');

const app = express()

require("./config/connect")
require('dotenv').config()

const authRoutes = require('./routes/authRoute.js');
const confirmeUserRoutes = require('./routes/confirmedUserRoute.js');



//middlwaere :
app.use(express.json());
app.use(cors());



// routes : 
app.use('/api/auth',authRoutes);
app.use('/api/user',confirmeUserRoutes);


const PORT = process.env.PORT 
app.listen(PORT,()=>{console.log(`Server Active On Port : ${PORT} *_*`)})