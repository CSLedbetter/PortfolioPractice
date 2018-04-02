const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}`));

app.use("/", (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use("/", (req,res) => {
    res.sendFile(__dirname + '/portfolio.html');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});