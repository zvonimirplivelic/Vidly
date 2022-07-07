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

    const{error} = Joi.validateGenre(req.body)

    if(error) return res.status(400).send(result.error.details[0].message)

    const genre = {
        id:genres.length + 1,
        name: req.body.name
    }

    genres.push(genre)
    res.send(genre)
})

app.put('/vidly/genres/:id', (req, res) => {

    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre was not found.');
  
    const { error } = validateGenre(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    genre.name = req.body.name; 
    res.send(genre);
  });

app.delete('/vidly/genres/:id', (req, res) => {

    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre was not found.');
  
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
  
    res.send(genre);
  });
  
  app.get('/vidly/genres/:id', (req, res) => {

    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre was not found.');
    res.send(genre);
  });
  
  function validateGenre(genre) {
    const schema = {
      name: Joi.string().min(3).required()
    };
  
    return Joi.validate(genre, schema);
  }

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))