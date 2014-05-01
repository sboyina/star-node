#!/usr/bin/env node
/* global require, process*/
var args = process.argv.slice(2);
var express = require('express');
var app = express();
var port = args.length > 0 ? args[0] : 80;
app.use(express.static(process.cwd().toString()));
app.listen(port);
console.log('Server started on '+ port);