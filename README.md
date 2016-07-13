# viewport-interpolator
[![npm version](https://img.shields.io/npm/v/viewport-interpolator.svg?style=flat-square)](https://www.npmjs.com/package/viewport-interpolator)
[![dependency status](https://img.shields.io/david/team-magneto/viewport-interpolator.svg?style=flat-square)](https://david-dm.org/team-magneto/viewport-interpolator)
[![build status](https://img.shields.io/travis/team-magneto/viewport-interpolator.svg?style=flat-square)](https://travis-ci.org/team-magneto/viewport-interpolator)

Linear interpolation for viewport points.

It renders a group of viewport breakpoints like `[320, 768]` and pixel points `[16, 18]` into lines
in the format of `calc(Xvw + Ypx)` to be used in responsive css styling, like font sizes.

Based on :
- http://descomplica.github.io/css-size-calculator/
- https://medium.com/descomplica-insights/trigonometria-do-font-size-a104c95fa9a

## Usage

Let's create an interpolator for font sizes. For the following breakpoints: `320, 768, 1360` we want
`16, 18, 22` px font sizes.

First, create the interpolator:

```js
import viewportInterpolator from 'viewport-interpolator'

const interpolator = viewportInterpolator([320, 16], [768, 18], [1360, 22])
```

And call it with the current screen width to get the correct value:

```js
interpolator(320)  // returns "calc(0.4464285714285714vw + 14.571428571428571px)" i.e. 16px on 320px screen width
interpolator(768)  // returns "calc(0.6756756756756757vw + 12.81081081081081px)"  i.e. 18px on 768px screen width
interpolator(1360) // returns "calc(1.4285714285714286vw + 2.5714285714285716px)" i.e. 22px on 1360px screen width
interpolator(1500) // returns "calc(1.4285714285714286vw + 2.5714285714285716px)" i.e. 24px on 1500px screen width
```

Or call it like:

```js
const myFontSize = interpolator(window.innerWidth)
```

## Contributing

First of all, **thank you** for wanting to help!

1. [Fork it](https://help.github.com/articles/fork-a-repo).
2. Create a feature branch - `git checkout -b more_magic`
3. Add tests and make your changes
4. Check if tests are ok - `npm test`
5. Commit changes - `git commit -am "Added more magic"`
6. Push to Github - `git push origin more_magic`
7. Send a [pull request](https://help.github.com/articles/using-pull-requests)! :heart: :sparkling_heart: :heart:
