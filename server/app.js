var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/quote/', function (req, res, data) {
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

        saveQuotes(existingQuotes);
    })
})

app.get('/quotes/', function (req, res) {
    var file = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));
    res.json(file);
});

app.delete = function (){
    fs.readFile(__dirname + '/quotes.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        var existingQuotes = JSON.parse(data);
        var quoteToDeleteIndex = getItemIndex(id, existingQuotes.quotes);
        existingQuotes.quotes.splice(quoteToDeleteIndex ,1);

        saveQuotes(existingQuotes);
    });
}

var port = process.env.PORT === undefined ?
    3000 :
    process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Listining on port " + port);
});

function saveQuotes (existingQuotes) {
    fs.writeFile('quotes.json', JSON.stringify(existingQuotes), function (err) {
        if (err) {
            console.log('err');
        } else {
            console.log('saving quotes');
        }
    });
}

function searchArray (key, array) {
    for (var i = 0; i < array.length; i++){
        if (array[i].id === key){
            return array[i];
        }
    }
}

function getItemIndex (key, array) {
    for (var i = 0; i < array.length; i++){
        if (array[i].id === key){
            return i;
        }
    }
}