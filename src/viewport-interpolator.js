const viewportInterpolator = (...points) => {
  let interpolationPoints = points.sort((a, b) => {
    // sort
    if (a[0] < b[0]) { return -1 }
    if (a[0] > b[0]) { return 1 }
    return 0
  })

  interpolationPoints = interpolationPoints.reduce((prev, current, index) => {
    // calculate the interpolation
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

    if (interpolationPoints.length - 1 === index) {
      current.push(interpolation)
    }

    return array
  })

  // add viewport width 0 point
  if (interpolationPoints[0][0] !== 0) {
    interpolationPoints = [[0, 0, interpolationPoints[0][2]], ...interpolationPoints]
  }

  return (viewportWidth) => {
    // remove points greater then viewport
    const remainingPoints = interpolationPoints.filter(
      (interpolation) => interpolation[0] <= viewportWidth
    )

    // return last remaining point
    return remainingPoints[remainingPoints.length - 1][2]
  }
}

export default viewportInterpolator
