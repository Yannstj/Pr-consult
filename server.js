const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Moteur de template

app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public')); //Recupère les fichier static sans préciser les routes (CSS, images...)

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


// Routes 

app.get('/', (request, response) => {
    response.render('pages/index')
});

app.post('/',(request, response) => {
    console.log(request.body)
});

app.listen(8080)