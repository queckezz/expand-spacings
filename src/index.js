
const zip = require('@f/zip-obj')

const directions = ['top', 'right', 'bottom', 'left']

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1)

const directionalProperty = (propName) => (spacings) => {
  return zip(
    directions.map((direction) => propName + capitalizeFirstLetter(direction)),
    spacings
  )
}

const expandFor = (propName) => {
  const getProps = directionalProperty(propName)

  return function (top, right, left, bottom) {
    switch (arguments.length) {
      case 1:
        const all = top
        return getProps([all, all, all, all])
      case 2:
        const x = right
        const y = top
        return getProps([y, x, y, x])
      case 3:
        throw new Error('3 Arguments are not supported.')
      case 4:
        return getProps([top, right, left, bottom])
    }
  }
}

const padding = expandFor('padding')
const margin = expandFor('margin')

exports.padding = padding
exports.margin = margin
