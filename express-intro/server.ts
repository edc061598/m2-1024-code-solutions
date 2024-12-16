import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
