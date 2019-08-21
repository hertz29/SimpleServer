const express = require('express');
const router = require('./router');
const app = express();

app.use('/video', router);
app.listen(5000);
