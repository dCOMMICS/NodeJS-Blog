require('dotenv').config();

const express = require('express');

const app = express();
const PORT = 5000 || process.env.PORT;

app.get  ('', (req, res)=>{
    //should print hello world on SCREEN//
    res.send("Jambo");

});

app.listen(PORT, ()=>{
    console.log(`app Listenning  on port ${PORT}`);

});