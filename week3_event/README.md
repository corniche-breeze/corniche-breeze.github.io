# Custom Greeting Function

A simple JavaScript function that generates a personalized greeting using a name and time of day.

## Function

`generateCustomGreeting(name, time)`

The function accepts two parameters:

- `name` — the name used in the greeting
- `time` — the time of day, such as `"morning"` or `"evening"`

If `time` is not provided, it defaults to `"day"`.

## Example

```javascript
generateCustomGreeting("Sam", "morning");