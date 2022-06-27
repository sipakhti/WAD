
const express = require('express')

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/api', (req, res) => {
    res.header('Content-Type', 'application/json')
    
    console.log(req.query.username);
    res.json({name: req.query.username})
})

app.listen(3000, err => {
    if (err) console.log(err);
    console.log(`server listening on port 3000`);
})