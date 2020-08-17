'use strict';
let Koa     = require('koa'),
    send    = require('koa-send'),
    Router  = require('koa-router'),
    serve   = require('koa-static'),
    koaBody = require('koa-body'),
    fs = require('fs'),
    { Client } = require('pg');

let app = new Koa();
let router = new Router();
let people = [{"role":'Sport maniac',"name":'Laccer'},
             {"role":'Mentor no.1',"name":'Balázs'},
             {"role":'Bicikli pajtás',"name":'Lóci'},
             {"role":'Fóka pajtás',"name":'Peti'},
             {"role":'Insta tréner',"name":'Flávi'},
             {"role":'Indian dancer',"name":'Gaurav'},
             {"role":'Miskolci vitéz',"name":'Gabka'},
             {"role":'Májkrém specialist',"name":'Dani'},
             {"role":'Group tamer',"name":'Kriszta'},
             {"role":'Favourite tester',"name":'Kriszti'},
             {"role":'SQL-fuksz mester',"name":'Máté'},
             {"role":'FC varázsló',"name":'Ákos'},   
             {"role":'Pega ninja',"name":'Dinesh'},
             {"role":'Happy scrum master',"name":'Dávid'},
             {"role":'Favourite taster',"name":'Zsó'},
             {"role":'Tojáskrém expert',"name":'Márk'},
             {"role":'Always there',"name":'Alex'},
             {"role":'Jobbkéz',"name":'Vivi'},
             {"role":'Mobilapp betyár',"name":'Tamás'}             
                    ];


// serve files in public folder (css, js etc)
app.use(serve(__dirname + '/public'));

// rest endpoints
router.get('/api/people', async function (ctx){
    let resp = people;
    ctx.body = resp;
});

router.get('/*', async function (ctx){
    ctx.body = '<div style="text-align: center;font-size: 20px;">' +
                '<p style="margin: 2em 0 0 0;font-family: monospace;">Ooops.. I do not know what you mean... :(</p>'+
                '<img src="../decor/not-found.gif" alt="Page not found"></div>';
});

app.use(koaBody());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 5000);
