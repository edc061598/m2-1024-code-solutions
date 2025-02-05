import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription:string;
  longDescription:string;
}

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
        order by "productId"
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// app.post('/api/products', async (req, res, next) => {
//   try {
//     const { name, imageUrl, price, shortDescription, longDescription } = req.body;
//     if (!name || !imageUrl || !price || !shortDescription) {
//       throw new ClientError(400, 'name, price, imageurl and shortdesc are required');
//     }
//     const sql = `
//       insert into "products" ("name", "imageUrl", "price", "shortDescription")
//       values ($1, $2, $3, $4)
//       returning *
//     `;
//     const params = [name, imageUrl, price, shortDescription, longDescription];
//     const result = await db.query<Product>(sql, params);
//     const [product] = result.rows;
//     res.status(201).json(product);
//   } catch (err) {
//     next(err);
//   }
// });

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!Number.isInteger(productId) || productId < 1) {
      throw new ClientError(400, 'todoId must be a positive integer');
    }
    const sql = `
    select * from "products"
    where "productId" = $1
    `;
    const params = [productId];

    const result = await db.query<Product>(sql, params);
    const [product] = result.rows;
    if (!product) {
      throw new ClientError(404, `cannot find product with productId ${productId}`);
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
