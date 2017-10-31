var express = require('express');
var app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/quotes/', function(req, res){
    res.json({
        quotes: [
            {
                id: 1,
                date:"01/01/2017",
                rating: 5,
                conversation:[
                    {
                        person: "J",
                        message: "I have itchy legs."
                    },
                    {
                        person: "V",
                        message: "Have you considered having sex?"
                    }
                ]
            },
            {
                id: 2,
                date: "02/01/2017",
                rating: 4,
                conversation:[
                    {
                        person: "J",
                        message: "I like thing."
                    },
                    {
                        person: "V",
                        message: "Thing is horrible?"
                    }
                ]
            }
        ]
    })
});

app.listen(3000, function(){
    console.log("Listining on port 3000");
})