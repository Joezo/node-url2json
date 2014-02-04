#!/usr/bin/env node
var qs = require('qs');
console.log(JSON.stringify(qs.parse(process.argv[2]),null,2));
