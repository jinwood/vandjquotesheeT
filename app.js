var express = require('express');
var app = express();

app.get('/quotes/', function(req, res){
    res.json({
        quotes: [
            {
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
                date: "02/01/2017",
                raiting: 4,
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