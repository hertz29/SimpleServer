const express = require('express');
const model = require('./model');
const app = express();

let result;
app.post('/',async (req,res) => {

    let link = req.param('link');
    result = await model.addVideo(link)
    res.statusCode = 200;
    res.send(`Video ${link} was successfully added!`);
});


app.get('/',async (req,res) => {
    result = await model.getAllVideos();

    res.statusCode = 200;

    res.send(result);
});

app.delete('/', async (req,res) => {

    let link = req.param('link');

    await model.deleteVideo(link)

    res.statusCode = 200;

    res.send(`Video ${link} was successfully removed`);
});



app.listen(5000);
