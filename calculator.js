const express=require("express");
const bodyParser=require("body-parser");
const app =express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/",function(req,res){
    var num1=Number(req.body.weight);
    var num2=Number(req.body.height);
    var result= num1/(num2*num2);
    res.send("The result : "+result);

});
app.listen(3000, function(){
    console.log("server started on 300");
});
//npm package body parser
