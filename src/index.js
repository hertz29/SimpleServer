const express = require('express');
const app = express();

app.get('/', (req,res) => {
    console.log('hello world');
});

app.listen(5000);
