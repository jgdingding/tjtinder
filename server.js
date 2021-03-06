#!/usr/bin/nodejs

// // -------------- load packages -------------- //

// INITIALIZATION STUFF
var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var request = require('request');
var mysql = require('mysql');



// // -------------- express initialization -------------- //

// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
app.set('port', process.env.PORT || 8080 );
app.set('view engine','hbs');

app.use('/js',express.static(path.join(__dirname,'js')));
app.use('/css',express.static(path.join(__dirname,'css')));
app.use('/fonts',express.static(path.join(__dirname,'fonts')));



// -------------- variable definition -------------- //
// This counter is stored in RAM, and will be reset every time you
// restart the server.

// // -------------- express 'get' handlers -------------- //
// // These 'getters' are what fetch your pages

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/login',function(req,res){
   res.sendFile(__dirname+'/login.html'); 
});

app.get('/register',function(req,res){
   res.sendFile(__dirname+'/register.html'); 
});

app.get('/match',function(req,res){
   res.sendFile(__dirname+'/match.html'); 
});

app.get('/:page', function(req, res){
    var paramsRequest = req.params.page;
    
    // specific logic if the user requested https://user.tjhsst.edu/pckosek/flipcoin,
    // otherwise, redirect to the root level page
    console.log(paramsRequest)
    if (paramsRequest=='/login') {
        res.redirect('https://user.tjhsst.edu/2019jgou/');
    }else{
        res.redirect('https://user.tjhsst.edu/2019jgou/');
    }
});

app.get('/makeProfile',function(req,res){
    console.log("testtesttest");
  var con = mysql.createConnection({
    host: "mysql1.csl.tjhsst.edu:3306",
    user: "site_tjtinder",
    password: "EktntpYTB7VYwPpeNHgtE4UN"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    first=req.query.first;
    last=req.query.last;
    email=req.query.email;
    pw=req.query.pass;
    var sql = "INSERT INTO Persons (FirstName, LastName, Email, Password) VALUES ("+first+", "+last+", "+email+", "+pw+")";
    con.query(sql, [VALUES], function(err, result) {
      if(err) throw err;
      console.log("Registered");
    });
  });
});


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 


var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
