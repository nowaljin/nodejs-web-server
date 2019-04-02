var express = require("express");
var middleware = require("./middleware");
var app = express();
var PORT = 3000;

var middleware = require("./middleware");
 


app.use(middleware.logger);

app.get("/hakkimda",middleware.requireAuthentication, function(req, res){
    res.send("Hakkımda Sayfası")
})

app.use(express.static(__dirname+'/public'))

// console.log(__dirname);

app.listen(PORT, function(){

    console.log("Express server "+ PORT +" nolu portta çalışıyor...");

});