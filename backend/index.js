const express = require('express');
const { connection } = require('./Config/db');
require('dotenv').config()

const app = express();


app.listen(process.env.PORT, async()=>{
    try {
        console.log('Connecting to DB');
        await connection;
        console.log(`Connected to DB Port running at ${process.env.PORT}`);
    } catch (error) {
        console.log('Something Went wrong');
        console.log(error);
    }
})