var mysql = require('mysql');

//create a connection
var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
})

//connect to sql
db.connect(err=>{
    if (err) throw err;
    console.log("connected to database!!")
})