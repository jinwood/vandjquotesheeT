var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/quote/', function (req, res, data) {
    console.log('in new quote');
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

        saveQuotes(JSON.stringify(existingQuotes));
        res.send('saved new quote')
    })
})

app.get('/quotes/', function (req, res) {
    console.log('in get quotes');
    var path = __dirname + '\\quotes.json';

    fs.exists(path, (exists) => {
        console.log(exists ? 'quotes found' : 'quotes not found')
        if(exists) {
            var file = JSON.parse(fs.readFileSync(path, 'utf8'));
            if(!file){
                console.log('didn\'t find a file');
            }
            res.json(file);
        } else {
            var jsonData = { "quotes": []};
            fs.writeFile(path, JSON.stringify(jsonData), function(err){});    
        }
    });
});

app.delete('/quote/:quoteId', function(req, res){
    console.log('in delete quote');
    fs.readFile(__dirname + '/quotes.json', 'utf8', function (err, data) {
        if (err) {
            console.log('error reading quotes ' + err);
            return;
        }
        var existingQuotes = JSON.parse(data);
        var quoteToDeleteIndex = getItemIndex(req.params.quoteId, existingQuotes.quotes);
        existingQuotes.quotes.splice(quoteToDeleteIndex ,1);

        saveQuotes(JSON.stringify(existingQuotes));

        res.send('deleted user')
    });
});

var port = process.env.PORT === undefined ?
    3000 :
    process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Listining on port " + port);
});

function saveQuotes (existingQuotes) {
    fs.writeFile(__dirname + '/quotes.json', existingQuotes, (err) => {
        if (err) {
            console.log('error saving quotes' + err);
        } else {
            console.log('successfully saved quote');
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
        if (array[i].id === parseInt(key)){
            return i;
        }
    }
}