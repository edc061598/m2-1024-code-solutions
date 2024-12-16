import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(errorMiddleware);

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select
    "filmId",
    "title",
    "replacementCost"
    from "films"
    order by "replacementCost" desc
    limit 2;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!filmId || isNaN(Number(filmId)) || Number(filmId) < 1) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
    select
    "description",
     "filmId",
    "replacementCost",
    "title"
     from "films"
    where "filmId" = $1;
    `;
    const params = [Number(+filmId)];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, 'filmId not found');
    }
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
