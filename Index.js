const express = require('express');

// Init App
const app = express();


// Home Route
app.get('/v1/welcome', function(req, res){
      res.send("Hello World");
});

// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});