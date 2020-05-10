const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const userRoute = require('./routes/user.route');

const port = 8000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

//??? app.use(express.json());
// Để có req.body
app.use(bodyParser.json()); // for parsing application/json 
app.use(bodyParser.urlencoded({ extended: true })) ;// for parsing application/x-www-form-urlencoded

app.use(cookieParser());

// Lưu trữ các file static vào folder public
app.use(express.static('public'));
app.get('/', function(req, res) 
{
    res.render('index', {
        name: 'Ngân'
    });
});

app.use('/users', userRoute);

app.listen(port, function()
{
    console.log('Server listening on port ' + port);
})
