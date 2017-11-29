const Express = require('express');
const app = Express();
const port = process.env.PORT || 3000;

app.use("/", (req,res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});