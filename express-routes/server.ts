import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});

app.get('/', (req, res) => {
  res.send('GIT');
});

app.get('/notes', (req, res) => {
  res.send('This is the notes');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(noteId);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
