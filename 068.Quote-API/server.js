const express = require('express');

const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Get routes - get data from quotes array
app.get('/api/quotes', (req, res) => {
    let quoteMatch;
    let quoteSearch = req.query.person;
    if (quoteSearch == undefined) {
        res.send({quotes: quotes})
    } else {
        quoteMatch = quotes.filter(quote => {
            return quote.person == quoteSearch && quote;
        });
        if (quoteMatch) {
            res.send({quotes: quoteMatch});
        } else {
            res.status(404).send('Author not found!');
        }
    }
})

app.get('/api/quotes/random', (req, res) => {
    let randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote})
});

// Post route - add new quotes to the array
app.post('/api/quotes', (req, res) => {
    let newQuotePerson = req.query.person;
    let newQuote = req.query.quote;
    if (newQuote && newQuotePerson) {
        quotes.push(req.query);
        generateIds(quotes);
        getPersonInfo(quotes);
        res.status(201).send({quote: quotes[quotes.length-1]});
    } else {
        res.status(400).send('Quote not found with the id provided!');
    }
});

// Put route - updates data in the array (uses provided id)
app.put('api/quotes/:id', (req, res) => {
    if (req.query.person && req.query.quote) {
        const quoteIndex = getIndexById(req.params.id, quotes);
        if (quoteIndex !== 1) {
            quotes[quoteIndex] = req.query 
            getPersonInfo(quotes);
            res.send({quote: req.query});
        } else {
            res.status(404).send('No quote with the provided id found.')
        }
    } else {
        res.status(400).send('There is a missing parameter in the request!');
    }
});

app.listen(PORT, () => {
   console.log(`Server Quote API Listening on PORT ${PORT}.`);
   generateIds(quotes);
});