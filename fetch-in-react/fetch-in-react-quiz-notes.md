# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  the Fetch method.
- What two things need to be done to properly handle HTTP request errors? Why?
  A promise and response object are needed to handle the request errors. Because if these are not valid responses then there would have to be a way to catch it.
- How can `useEffect` be used to load data for a component?
  Running a side effect function after rendering the component.
- How do you use `useEffect` to load component data just once when the component mounts?
  Have a dependency or dependencies within the useEffect function.
- How do you use `useEffect` to load component data every time the data key changes?
  Have the dependency prop to specify which value to re-run the effect.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  boomi api and a datastax database.

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
