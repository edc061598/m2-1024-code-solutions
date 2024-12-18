import express from 'express';
import pg from 'pg';
import { ClientError } from './lib';

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select
    *
    from "grades";
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    if (!grades) {
      throw new ClientError(500, 'no films here');
    }
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!gradeId || Number.isNaN(gradeId) || Number(gradeId) < 1) {
      throw new ClientError(404, 'gradeId is required');
    }
    const sql = `
    select
    "name",
    "course",
    "gradeId",
    "score",
    "createdAt"
    from "grades"
    where "gradeId" = $1;
    `;
    const params = [Number(gradeId)];
    const result = await db.query(sql, params);
    const grades = result.rows[0];
    if (!grades) {
      throw new ClientError(500, 'gradeId does not exist');
    }
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    const { gradeId } = req.params;
    if (!name) {
      throw new ClientError(404, 'name is required');
    }
    if (!course) {
      throw new ClientError(404, 'course is required');
    }
    if (!score) {
      throw new ClientError(404, 'score is required');
    }
    const sql = `
    update "grades"
    set "name" = $1,
    "score" =$2,
    "course" =$3
    where "gradeId" = $4
    returning *;
    `;
    const params = [name, score, course, gradeId];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    if (!newGrade) {
      throw new ClientError(500, 'grade was not updated');
    }
    res.status(200).json(newGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
    `;
    const params = [Number(+gradeId)];
    const result = await db.query(sql, params);
    const willDelete = result.rows[0];
    if (!willDelete) {
      throw new ClientError(400, 'invalid gradeId');
    }
    res.status(204).json(willDelete);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
