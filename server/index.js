const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { getCompliment, collectFortune, addToView, } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get('/api/fortune', collectFortune);

app.get('/api/movies', addToView);

app.post('/api/todo', (req, res) => {
    const { item } = req.body;
    res.status(200).send({message: 'Item added successfully'});
});


app.listen(4000, () => console.log("Server running on 4000"));
