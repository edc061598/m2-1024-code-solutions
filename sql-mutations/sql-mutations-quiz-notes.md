# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create, Read, Update and Delete
- How do you add a row to a SQL table?
  Using the insert keyword and specifying the table you want to add it to.
- How do you add multiple rows to a SQL table at once?
  by creating a different set of values and separating them with a comma.
- How do you update rows in a database table?
  By using the update keyword.
- How do you delete rows from a database table?
  Using the delete keyword for the table.
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Because if not, the update or delete will apply to all the rows and columns in the table.
- How do you accidentally delete or update all rows in a table?
  By just using the command and only specifying the name of the table.
- How do you get back the modified row without a separate `select` statement?
  Using the returning \* function.
- Why did you get an error when trying to delete certain films?
  It was violating foreign key constraint.

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
