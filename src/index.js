const express = require('express');
const model = require('./model');
const app = express();


app.post('/',(req,res) => {
    res.send(model.addVideo(req,res));
});
app.get('/',(req,res) => {
    res.send(model.getAllVideos(req,res));
});
app.delete('/delete/', (req,res) => {
    res.send(model.deleteVideo(req,res));
});



app.listen(5000);
