const express = require('express');
const model = require('./model');
const app = express();

let result;
app.post('/',async (req,res) => {

    let link = req.param('link');
    result = await model.addVideo(link)
    res.send(result);
});


app.get('/',async (req,res) => {
    result = await model.getAllVideos();
    console.log(result);
    res.send(result);
});
app.delete('/', async (req,res) => {

    let link = req.param('link');
    result = await  model.deleteVideo(link)

    res.send(model.deleteVideo(req,res));
});



app.listen(5000);
