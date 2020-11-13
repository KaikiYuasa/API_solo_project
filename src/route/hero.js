const express = require("express");
const app = express.Router();
import Hero from '../entities/HeroModel'

app.get('/', async (req, res) => {
    const hero = new Hero()
    const heros = await Hero.find()
    res.send(heros)
  })

  module.exports = app;