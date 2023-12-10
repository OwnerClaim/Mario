const express = require('express');

const app = express();

const axios = require('axios');

app.use(express.static('public'));

app.get('/', (req, re) => {
    re.sendFile('public/main.html', { root: __dirname });
});

app.listen(2524, () => {
    console.log("JOGO HOSPEDADO NA PORTA 2524! http://localhost:2524/")
})