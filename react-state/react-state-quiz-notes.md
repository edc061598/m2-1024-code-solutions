# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Special functions that allow components to have access to state and other React features.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Function must start with 'use' followed by a capital letter. Hooks can only be called by React components and other hooks. All hooks in a component must always be called at the top level of a component, and in the same order.
- What is the purpose of state in React?
  Data that a component saves so it can modify its output.
- Why can't we just maintain state in a local variable?
  The data will be lost since the variables have no relation to previous invocations of a component function.
- What two actions happen when you call a `state setter` function?
  assigns to a variable and updates the value of state. A re-render of the app component will change as well.
- When does the local `state variable` get updated with the new value?
  After the value of the initial index is passed along the component function.

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
