var express = require('express');
var router = express.Router();

router.get('/hello', function hello(request, response){
  response.send('Hello!');
});

router.get('/', function(request, response){
  response.send('Hello world!');
});

module.exports = router;
