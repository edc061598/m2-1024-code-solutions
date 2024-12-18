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
      SELECT
      "filmId",
      "title"
      FROM "films"
      ORDER BY "replacementCost" desc;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
    SELECT
    "title",
    "filmId"
    FROM "films"
    where "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const { title } = req.query;
    if (!filmId || isNaN(Number(filmId)) || Number(filmId) < 1) {
      throw new ClientError(400, 'Invalid filmId');
    }
    if (!title) {
      throw new ClientError(404, 'title is required');
    }
    const sql = `
    UPDATE "films"
    SET "title" = $1
    WHERE "filmId" = $2
    returning *;
    `;
    const params = [title, Number(filmId)];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, 'filmId not found');
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
