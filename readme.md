
# `expand-spacings` [![Js Standard Style][standard-image]][standard-url]

> Expands `margin` and `padding` css properties to their long form. This module is perfect for a `css-in-js` library with an atomic approach, deduping all properties to single purpose classes.

## Why?

If your using [`fela`](http://ghub.io/fela) for example, you have a plugin like [`fela-plugin-unit`](http://ghub.io/fela-plugin-unit) to add units to your plain numbers. Because fela doesn't understand shorthand properties (like, `padding: 10 5`) it also can't prefix them with units. You'll end up with code that'll look a lot like this:

```js
const rule = (props) => ({
  padding: `${theme.scale[1]}px ${theme.scale[2]}px`
})
```

This module seperates `margin` and `padding` into their normalized long form:

```js
const rule = (props) => ({
  color: props.color,
  ...padding(theme.scale[1], theme.scale[2])
})

// expands to

const output = {
  color: 'green',
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '10px',
  paddingRight: '10px',
}
```

## Installation

```bash
npm install expand-spacings
```

## API

The arguments for both `margin()` and `padding()` functions work the same as their css definitions: https://developer.mozilla.org/en/docs/Web/CSS/padding

```js
// all sides
margin(10)
// vertical, horizontal
margin(5, 10)
// top, right, bottom, left
margin(5, 10, 15, 20)
```

## Author

**expand-spacings** © [Fabian Eichenberger](https://github.com/queckezz), Released under the [MIT](./license) License.<br>
Authored and maintained by Fabian Eichenberger with help from contributors ([list](https://github.com/queckezz/expand-spacings/contributors)).

> GitHub [@queckezz](https://github.com/queckezz) · Twitter [@queckezz](https://twitter.com/queckezz)

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[license-image]: http://img.shields.io/npm/l/fmt-obj.svg?style=flat-square
[license-url]: ./license