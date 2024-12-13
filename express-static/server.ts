import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('got /!');
});

app.get('/notes', (req, res) => {
  res.send('got notes!');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
