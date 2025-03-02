const express=require('express');
const app=express();
const cookieParser = require("cookie-parser");
const cors= require('cors');
require('dotenv').config()
const path=require( "path");
const PORT=process.env.PORT;
const _dirname= path.resolve();
app.use(cors({
    origin:'*', //your react app url
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());
require('./DBConn/conn');

const GymRoutes=require('./Routes/gym');
const MembershipRoutes=require('./Routes/membership');
const MemberRoutes = require('./Routes/member')

app.use('/auth',GymRoutes)
app.use('/plans',MembershipRoutes)
app.use('/members',MemberRoutes)

app.use(express.static(path.join(_dirname,"/gms-frontend/build")))
app.get('*',(_,res)=>{
   res.sendFile(path.resolve(_dirname,"gms-frontend","build","index.html")) ;
})
app.listen(PORT,()=>{
    console.log(`server is running on Port ${PORT}`);
})