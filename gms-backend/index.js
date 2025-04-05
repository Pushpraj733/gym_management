const express=require('express');
const app=express();
const cookieParser = require("cookie-parser");
const cors= require('cors');
require('dotenv').config()
const PORT=process.env.PORT;

app.use(cors({
    origin:'http://localhost:4000', //your react app url
    credentials: true
}))

app.use(cookieParser());
app.use(express.json())
require('./DBConn/conn');

const GymRoutes=require('./Routes/gym');
const MembershipRoutes=require('./Routes/membership');
const MemberRoutes = require('./Routes/member')

app.use('/auth',GymRoutes)
app.use('/plans',MembershipRoutes)
app.use('/members',MemberRoutes)
app.listen(PORT,()=>{
    console.log('server is running on Port 4000')
})