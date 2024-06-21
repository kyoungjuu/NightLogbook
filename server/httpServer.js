//MySQL + Node.js 접속 코드
var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2199",
    database: "logbook",
});

conn.connect();

// conn.query("selcet * from post", function ( err, rows, fields) {
//     if (err) throw err;
//     console.log(rows);
// });

const express = require('express');
const path = require('path');
const app = express();



app.listen(8080, function(){
    console.log("포트 8080으로 서버 대기중...")
});

app.get('/logbook', function(req, res){
    res.send('야간 일지 작성 페이지입니다.')
});

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/list', function(req, res){
//     conn.query("SELECT * FROM post", function (err, rows, fields) {
//         if (err) throw err;
//         res.json(rows); // 클라이언트에게 JSON 형태로 데이터 전송
//     });
//  });
 