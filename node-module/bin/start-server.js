#!/usr/bin/env node
/* global require, process*/
var args = process.argv.slice(2);
var dir = process.cwd().toString();
var port = args.length > 0 ? args[0] : 80;
var starNode = require('../main.js');
starNode.start(dir, port);