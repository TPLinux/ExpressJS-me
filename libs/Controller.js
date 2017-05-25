'use strict';
var session = require('express-session');
var express = require('express');
var controller = express();

controller.mdb = require('./mdb');
controller.md5 = require('md5');
controller.sha1 = require('sha1');
controller.nodemailer = require('nodemailer');
controller.lang = require('../lang/lang.js');

controller.mail = controller.nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'username@gmail.com',
        pass: 'PASSWORD'
    }
});
// to send email
/*
  let mailOptions = {
  from: 'example@example.com', // sender address
  to: 'example@example.com', // list of receivers
  subject: 'Testing node email', // Subject line
  text: 'Hello world ?', // plain text body
  html: '<b>Hello world ?</b>' // html body
  };
  
  [controller (in base controller /libs/Controller.js)|r (in /controllers/*.js )].mail.sendMail(mailOptions, (error, info) => {
  if (error) {
  console.error(error);
  }else{
  console.log(info);
  }
  });
*/
// regexes
controller.emailPattern = new RegExp(/^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]+$/);
controller.userPattern = new RegExp(/^[a-z][a-z0-9_]{2,10}$/);
controller.charPattern = new RegExp(/^[a-zA-Z]+$/);
controller.numPattern = new RegExp(/^[0-9]+$/);
controller.charNumPattern = new RegExp(/^[a-zA-Z0-9]+$/);

module.exports = controller;
