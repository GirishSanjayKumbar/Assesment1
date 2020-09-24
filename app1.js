var express= require('express');
var app=express();

var names= require("./names.json");

app.get('./shownames',function(req,res){
    res.send(names);
})

app.get('/check',function(req,res)
{
    name=req.query.name;
    for(i in names)
    {
        if(names[i].name== name)
        {
            res.send("username already exists please try another one");
        }
        else
        {
            res.send("user added")
        }
    }

    
})
app.listen('3000',function(res,req)
{
    console.log("listening to 3000");
})

