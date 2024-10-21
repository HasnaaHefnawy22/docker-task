const express = require('express');

const PORT =4000;
const app = express();


app.get("/",(req,res)=> res.send('<h1>hello hi</h1>'));

app.listen(PORT,()=> console.log('app is up port ${PORT}'));