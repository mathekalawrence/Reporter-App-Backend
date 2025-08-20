var express = require('express');
var app = express();

app.listen(3000);

app.get('/report', (req, res) => {
    res.sendFile("report.html", {root:_dirname});

})
