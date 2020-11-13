const express = require("express");
const app = express.Router();
import Hero from '../entities/HeroModel'

app.get('/', async (req, res) => {
    const hero = new Hero()
    const heros = await Hero.find()
    res.send(heros)
})

app.post('/', async (req, res) => {
    const hero = new Hero();
    hero.name = req.body.name;
    hero.gender = req.body.gender;
    hero.eyecolor = req.body.eyecolor;
    hero.race = req.body.race;
    hero.haircolor = req.body.haircolor;
    hero.height = req.body.height;
    hero.publisher = req.body.publisher;
    hero.skincolor = req.body.skincolor;
    hero.alignment = req.body.alignment;
    hero.weight = req.body.weight;


    await hero.save();
    const heros = await Hero.find();
    res.status(201).send(heros);
})

app.patch('/:id', async (req, res) => {
    const hero = await Hero.findOne({id: req.params.id});
    for (let key in req.body){
        hero[key] = req.body[key];
    }
    await hero.save();
    const heros = await Hero.find();
    res.send(heros);
})

app.delete('/:id', async (req, res) => {
    const hero = await Hero.findOne({id: req.params.id});
    await hero.remove();
    const heros = await Hero.find();
    res.send(heros);
})

  module.exports = app;