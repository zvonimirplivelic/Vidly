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
    {id:9, name:'Mistery'},
]