const { response } = require('express');
const express = require('express');
const { request } = require('http');

const app = express();

app.get('/' , (request , response)=>{
    console.log('requested url /');
    response.send('index.page');
});
app.get('/home' , (request , response)=>{
    console.log('requested url /home');
    response.send('home.page');

});

app.listen(3000 , (error)=>{
    console.log("express server started at 3000...");
});