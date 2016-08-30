var app = require("express")();
var http = require("http").Server(app);
var colors = require('colors');

app.get("/", function(req, res){
  res.send("<h1>Hello Chrome!</h1>");
  console.log("Got / : Server accessed.".red);
  console.log("URL: " + req.query.url);
});

http.listen(8080, function(){
  console.log("Listening on *:8080");
});
