const mongoose= require("mongoose");
const express =require('express');
const app =express();
const cors= require("cors");
const bodyParser = require("body-parser");
const Schema =mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/db' ,{useNewUrlParser :true});
app.use(cors());
app.use(bodyParser.json());

const cartSchema = new Schema({
    
    image:{type:String},
    price:{type:Number},
    title:{type:String},
    description:{type:String},
    id:{type:String}
    });
const Cart =mongoose.model('cart',cartSchema);


app.post("/cart",function(req,res){
    let cart = new Cart();
    cart.id=req.body.id;
    cart.title=req.body.title;
    cart.price=req.body.price;
    cart.image=req.body.image;
    cart.description=req.body.description;
    cart.save();
    res.json(cart);

    
})

app.get("/cart",function(req,res)
{
    Cart.find({},function(err,docs){
        res.json(docs);
        console.log(docs);
    })

})

app.listen(8080,function(){
    console.log("server started")
})
