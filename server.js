const express = require('express');
const app = express();

app.get('/', (req,res) => {
    return res.json({
        message : "hello world"
    })
})

app.listen(4000, () => {
    console.log("all done")
})