let Router=require("express").Router();
let {ObjectId} = require("bson")
let {book_details,order_details}=require('../Model/BookModel');
let mongoose=require("mongoose");
Router.get("/bus_details",async (req,res,next)=>{
    let bus_data=await book_details.find({});
    res.send({data:bus_data});
    // next()
});
Router.post("/findBook",async (req,res,next)=>{
    let body=req.body.id;
    try{
        let  bus_data=await book_details.findOne({_id:new ObjectId(body)});
        if(bus_data){
            return res.send({data:bus_data,ok:"true"});
        }

    }catch(e){
        return res.send({ok:"false"});
    }finally{

    }

    // next()
})

Router.post("/bookOrder",async (req,res,next)=>{
    let save = await new order_details({...req.body});
    let respose=await save.save();
    if(respose){
        let find=await book_details.findOne({_id:new ObjectId(req.body.book_id)});
        await book_details.updateOne({_id:new ObjectId(req.body.book_id)},{quantity:Number(find.quantity-req.body.quantity)})
        return res.send({order:"true",quantity:Number(find.quantity-req.body.quantity)});
    }
    return res.send({order:"false"})
})

module.exports={Router};