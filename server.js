const express=require("express");
const app=express(); //this function initiate the express server...
app.get("/",function(req,res){ /// means root file or page and res and req is response and request...
res.send("hello"); //response to server we can also use <h1>tags and attributes ...
});
app.get("/about",function(req,res){
  res.send("this page is owned by kp");
});
app.get("/addict",function(req,res){
  res.send("this boy is not addictive");
});
app.listen(3000, function(){
  console.log("server started at 3000");
});
