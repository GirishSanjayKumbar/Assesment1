const { send } = require("process");

express = require("express");
app = express();

hotel = require("./hotels.json");


app.get("/details", function(req, res)
{
    nameList = [];
    hotel.forEach(element =>
    {
        nameList.push(element.name) 
    });
    res.send(nameList);
})


app.get("/searchByCity", function(req, res)
{
    keyword = req.query.sCity;
    City = [];
    hotel.forEach(element =>
    {
        if(keyword == element.city)
        {
            City.push(element.name); 
        }
    });
    res.send(City);
})


app.get("/searchByType", function(req, res)
{
    keyword = req.query.sType;
    Type = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            Type.push(element.name); 
        }
    });
    res.send(Type);
})

app.get("/searchByCuisine", function(req, res)
{
    keyword = req.query.sCuisine;
    Cuisine = [];
    hotel.forEach(element =>
    {
        for (const key in element.cuisine)
        {
            if(keyword == element.cuisine[key])
            {
                Cuisine.push(element.name);
            }
        }
    });
    res.send(Cuisine);
})



app.listen(3000, function(req, res)
{
    console.log("Server listening to port 3000");
})