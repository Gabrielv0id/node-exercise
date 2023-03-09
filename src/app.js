const express = require('express');
const readJsonData = require('./utils/fs/readJsonData');

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

module.exports = app;