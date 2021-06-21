const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'CRUDDatabase',
    port:'3306'
});
// const sqlInsert = "INSERT INTO movie_reviews(movieName, movieReview) VALUE ('asd','good');"
// db.query(sqlInsert,(err, result)=>{
//     res.send("hello Ishan");
// });
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get",(req,res)=>{
    const sqlSelect = "select * from movie_reviews;"
    db.query(sqlSelect,(err,result)=>{
        res.send(result);

    });
})

app.get("/api/getselected",(req,res)=>{

    const fid = req.body.fid

    const sqlSelect = "select * from movie_reviews where id= ?;"
    db.query(sqlSelect,[fid],(err,result)=>{
        res.send(result);

    });
    // db.query(sqlSelect,(err,result)=>{
    //     res.send(result);
    //
    // });
})



app.post("/api/insert",(req,res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInset = "INSERT INTO movie_reviews(movieName, movieReview) VALUE (?,?);"
    db.query(sqlInset,[movieName,movieReview],(err,result)=>{
        console.log(result);

    });

});

app.listen(3001,()=>{
    console.log("running on port 3001");
});