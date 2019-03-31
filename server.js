var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication : function(req, res, next){
        console.log("Özel route girildi")
        next();

    },
    logger: function (req, res, next){
        console.log(req.metod);
        next();
    }
}

app.use(middleware.logger);

app.get("/hakkimda",middleware.requireAuthentication, function(req, res){
    res.send("Hakkımda Sayfası")
})

app.use(express.static(__dirname+'/public'))

// console.log(__dirname);

app.listen(PORT, function(){

    console.log("Express server "+ PORT +" nolu portta çalışıyor...");

});