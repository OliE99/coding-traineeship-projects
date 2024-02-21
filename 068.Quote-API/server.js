const express = require('express');

const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));



app.listen(PORT, () => {
   console.log(`Server Quote API Listening on PORT ${PORT}.`);
});