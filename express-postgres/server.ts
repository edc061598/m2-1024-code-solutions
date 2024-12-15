import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

const app = express();

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
