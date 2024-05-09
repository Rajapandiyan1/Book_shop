const express= require("express");
const body=require("body-parser");
const cors=require("cors");
const {Router}= require("./Routes/handleRouter");
const app=express();

app.use(body.urlencoded());
app.use(body.json());
app.use(cors());
app.use(Router)
app.listen(3001,()=>{
    console.log("server staring port 3001 ")
})