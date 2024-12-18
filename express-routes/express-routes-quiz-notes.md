# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  POST, GET, PUT AND DELETE. The server is not require to implement the methods, but it is good practice.
- What is Express middleware?
  A function that fulfills the requested action from routes. It is an array of functions.
- What is Express middleware useful for?
  It is good for mounting the middleware functions, like calling special functions.
- How do you mount a middleware with an Express application?
  Using a use or get method, which adds the functions to the middleware array.
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  Request and response objects.
- How do you specify and retrieve route parameters?
  Examine the request and add a body field to represent the json content. Add a user field if the user is logged in.

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
