# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  For interacting with your postgres database.
- How do you tell `pg` which database to connect to?
  Using the pool method to create a database object.
- How do you send SQL to PostgreSQL from your Express server?
  by using query method for the database.
- How do you access the rows that get returned from the SQL query?
  Using the rows property
- What must you always remember to put around your asynchronous route handlers? Why?
  You need an await for the query. You also will need the try catch method, for catching any potential errors.
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  Values in the sql that can allow for admin access to the database. To avoid it you use paramterized queries in the sql engine.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
