var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/quote/', function(req, res, data){
    var newQuote = req.body;

    fs.readFile('quotes.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        var existingQuotes = JSON.parse(data);
        var lastId = existingQuotes.quotes === undefined ?
            0 :
            existingQuotes.quotes.length;
        newQuote.id = lastId + 1;
        existingQuotes.quotes.push(newQuote);

        fs.writeFile('quotes.json', JSON.stringify(existingQuotes), function(err){
            if(err){
                console.log('err');
            }else{
                console.log('saved a new quote');
            }
        });
    })
})

app.get('/quotes/', function(req, res){
    var file = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));
    res.json(file);
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Listining on port " + process.env.PORT || 3000);
})