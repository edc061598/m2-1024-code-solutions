# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When a component first is added to the DOM and drawn on the page.
- What is a React Effect?
  When the component mounts, it fetches data from the API asynchronously and displays the data when the API returns it.
- When should you use an Effect and when should you not use an Effect?
  You don't need an effect when you want to update a component's state when some props or state change. Use an event to specify side effects that are cuased by rendering itself, rather than an event. Like setting up a server connection.
- When do Effects run?
  After the first render and after every update. The effects run asynchronously.
- What function is used to declare an Effect?
  the UseEffect at the top level of your component.
- What are Effect dependencies and how do you declare them?
  An array that allow you to specify which values the effect depends on.
- Why would you want to clean up from an Effect?
  It will prevent memory leaks by cleaning up the side effects created by an effect. Calls this functions when the component unmounts due to a change in dependencies.
- How do you clean up from an Effect?
  Use the useEffect CleanUp function.
- When does the cleanup function run?
  After the component unmounts from the DOM before the promise resolves.

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
