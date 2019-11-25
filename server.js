const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const recipeModel = require('./api/recipe.model');
const recipeControllers = require('./api/recipe.controllers');

const app = express();

app.use(fileUpload());
app.use(express.static('public'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

const dataBaseURL = process.env.DATABASE;

app.get('/api/recipes', recipeControllers.findAll);
app.get('/api/recipes/:id', recipeControllers.findById);
app.post('/api/recipes', recipeControllers.add);
app.post('/api/upload', recipeControllers.upload);
app.put('/api/recipes/:id', recipeControllers.update);
app.delete('/api/recipes/:id', recipeControllers.delete);
app.get('/api/import', recipeControllers.import);
app.get('/api/killall', recipeControllers.killall);

mongoose
  .connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
