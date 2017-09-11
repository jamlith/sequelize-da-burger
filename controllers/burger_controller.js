/*
 *  (Eat-Da-Burger):
 *      burger_controller.js - routing for express
 *
 *-------------------------------------->8------------------------------------*/

var express = require('express')
    , hndlbrs = require('express-handlebars')
    , bp = require('body-parser')
    , path = require('path')
    , ORM = require(path.join(__dirname, "./../config/orm.js"));

var app = express();
var PORT = process.env.PORT || 3000;

// set up our response decoders
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: "application/vnd.api+json" }));
app.use(express.static('public'));
app.engine('handlebars', hndlbrs({ defaultLayout: 'main' }));
app.set("view engine", 'handlebars');

app.get('/burgers', (req, resp) => {
    ORM.selectAll(function(data) {
        resp.json(data);
    });
});

app.post('/burgers', (req, resp) => {
    ORM.insertOne(req.body.name, function(id) {
        resp.json(id);
    });
});

app.put('/devour', (req, resp) => {
    ORM.updateOne(req.body.id, function(scs) {
        resp.json(scs);
    });
});

app.post('/regurgitate', (req, resp) => {
    ORM.regurgitateBurgers(function(rows) {
        resp.send("Regurgitated " + rows + " rows.");
    });
});

app.use((req, resp) => {
    resp.render('index');
});

app.listen(PORT, function() {
    console.log("Server is listening on port " + PORT)
})
