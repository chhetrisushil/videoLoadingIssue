/*
 * server.js
 * Copyright (C) 2016 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
var express = require('express'),
    app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('./static/'));

app.get('/processed', function (req, res) {
    res.sendFile('processed.html', {
        root: '.'
    });
});

app.get('/unprocessed', function (req, res) {
    res.sendFile('./unprocessed.html', {
        root: '.'
    });
});

app.listen(app.get('port'));
