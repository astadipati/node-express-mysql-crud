var express = require('express');
var mysql = require ('mysql');

var app = express();
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
});

// var nama = "Ipin"
// connection.query("INSERT INTO todo(name) VALUES (?)",nama, function(err, row, fields){
//     if (err){
//         console.log(err);
//     }
//     console.log("Sukses menambahkan data", nama);
// });

var id = 8;
connection.query("DELETE FROM todo WHERE id = ?",id, function(err, row, fields){
    if (err){
        console.log(err);
    }
    console.log("Sukses menghapus data id",id);
});

connection.query("SELECT * FROM todo", function(err, row, fields){
    if (err){
        console.log(err);
    }
    console.log(row);
});
