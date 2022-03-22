const {readFile} = require('fs');
const express = require('express');
const app = express();
const Port = 3600;

app.use(express.static(__dirname + '/'));

app.get('/', (request, response) => {

    readFile('./index.html', 'utf8', (err, html) => {

        if (err){

            response.status(500).send('error, lol');
        }

        response.send(html);
    })
});
app.get('/Zyciorys', (request, response) => {

    readFile('./Zyciorys.html', 'utf8', (err, html) => {

        if (err){

            response.status(500).send('error, lol');
        }

        response.send(html);
    })
});


app.listen(process.env.PORT || Port, () => console.log("at http://localhost:" + Port)) 