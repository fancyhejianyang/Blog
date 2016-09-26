// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log("express");
//   res.render('index', { title: 'express' });
// });

module.exports = function(app){
  app.get('/',function(req,res){
    res.render('index',{title:'主页'});
  });
  app.get('/login',function(req,res){
    res.render('login',{title:'登录'});
  })
};
