'use strict';

const express  = require('express'),
      app      = express(),
      env      = require('../config/env'),
      rootPath = process.cwd() + '/public'

console.log('----------EXPRESS--------')
console.log(process.cwd())

app.use(express.static(rootPath));
app.listen(8080, ()=> {
  console.log('Express Server 01');
});

