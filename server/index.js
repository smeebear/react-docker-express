const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("This is from express")
});

app.listen(4200, () => {
    console.log("Server started on port 4200");
})