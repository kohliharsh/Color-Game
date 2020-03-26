var express = require("express");

var app = express();

app.use(express.static('New folder'));

app.use('/', express.static(__dirname));


    app.get("/",function(req , res){
    res.sendfile(__dirname + "/colorgame.html");
})

app.listen(3000,function()
{
    console.log("server started");
})