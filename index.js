const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

const genres = [
    {id:1, name:'Action'},
    {id:2, name:'Comedy'},
    {id:3, name:'Thriller'},
    {id:4, name:'Western'},
    {id:5, name:'Romance'},
    {id:6, name:'Crime'},
    {id:7, name:'Documentary'},
    {id:8, name:'Sci Fi'},
    {id:9, name:'Mistery'}
]


app.get('/vidly/genres', (req, res) => {
    res.send(genres)
})

app.post('/vidly/genres', (req, res) => {
    const{error} = Joi.validate(req.body)

    if(error) return res.status(400).send(result.error.details[0].message)

    const genre = {
        id:genres.length + 1,
        name: req.body.name
    }

    genres.push(genre)
    res.send(genre)
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))