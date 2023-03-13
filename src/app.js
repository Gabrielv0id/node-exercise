const express = require('express');
const readJsonData = require('./utils/fs/readJsonData');
const writeJsonData = require('./utils/fs/writeJsonData');

const app = express();
app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readJsonData('./src/movies.json');

  const findMovie = movies.find((movie) => movie.id === Number(id));

  if (!findMovie) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
  return res.status(200).json(findMovie);
});

app.get('/movies', async (req, res) => {
  const movies = await readJsonData('./src/movies.json');

  return res.status(200).json(movies);
});

app.post('/movies', async (req, res) => {
  const movies = await readJsonData('./src/movies.json');
  const { movie, price } = req.body;
  const id = movies.length + 1;
  const newMovie = { 
    id,
    movie,
    price,
  };
  movies.push(newMovie);
  await writeJsonData(movies, './src/movies.json');

  res.status(201).json(newMovie);
});

module.exports = app;