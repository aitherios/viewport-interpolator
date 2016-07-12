const viewportInterpolator = (...points) => (viewportWidth) => {
  let interpolations = points.reduce((prev, current, index) => {
    let array

    if (!Array.isArray(prev[0])) {
      array = [prev]
    } else {
      array = prev
    }

    const last = array[array.length - 1]
    const slope = (current[1] - last[1]) / (current[0] - last[0])
    const intercept = (current[0] * last[1] - last[0] * current[1]) / (current[0] - last[0])
    const interpolation = `calc(${slope * 100}vw + ${intercept}px)`

    last.push(interpolation)
    array.push(current)

    if (points.length - 1 === index) {
      current.push(interpolation)
    }

    return array
  })

  if (interpolations[0][0] !== 0) {
    interpolations = [[0, 0, interpolations[0][2]], ...interpolations]
  }

  interpolations = interpolations.filter((interpolation) => interpolation[0] <= viewportWidth)

  return interpolations[interpolations.length - 1][2]
}

export default viewportInterpolator
