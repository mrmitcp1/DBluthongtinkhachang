const mysql = require('mysql')
const http = require('http')
const url = require('url')
const qs = require('qs')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '123321',
    database:'Demo',

})
connection.connect(function (err) {
    if (err){
        console.log(err.message)
    }
    else {
        console.log('success')
        const sql = 'CREATE TABLE customer(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), address VARCHAR(100))'
        connection.query(sql,function (err) {
            if (err){
                console.log(err.message)
            }
            console.log('Create table success')
            connection.end()
        })
        return;
    }
})