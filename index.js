var express = require('express');
var app = express();
var hbs = require('express-handlebars');

app.use(express.static(__dirname));

app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials' 
}));

app.set('view engine', 'hbs');
app.set('port',(process.env.PORT || 5000));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.htm');
})

var emotion = require('./task2')
app.use('/task2',emotion);


var Zodiac = require('./task4')
app.use('/task4',Zodiac);

app.listen(app.get('port'),function(){
    console.log("Listenning "+ app.get('port'));
});