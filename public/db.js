var mysql = require('mysql')
var connection = mysql.createConnection({
    host:process.env.HOST_NAME,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

var connect = function(){
    connection.connect(function(err){
        if(!err){
            console.log('Database is connection')
        }else{
            console.log('connection is error');
        }
    })
}
var closeDB = function(){
    connection.end(function(err){
        if(err) console.log("closed db");
    })
}
exports.excute_Item = function(sql,callbackInsertSp){
    connect();
    connection.query(sql,function(err,results,fields){
        if(!err) {
            callbackInsertSp(results);
        }  else{
            console.log(err);
        }
    });
}

exports.getItem = function (sql,callbackQuery){
    connect();
    connection.query(sql, function(err,results){
        if(!err){
            callbackQuery(results);
        }else{
            connect.log(err);
        }
    });
}