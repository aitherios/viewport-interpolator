const viewportInterpolator = (...points) => (viewportWidth) => {
  const viewportWidths = []
  const sizes = []
  points.forEach((point) => {
    viewportWidths.push(point[0])
    sizes.push(point[1])
  })

  const values = []

  for (var i = 0; i < viewportWidths.length-1; i++) {
    var x1 = viewportWidths[i]
    var x2 = viewportWidths[i+1]

    var y1 = sizes[i]
    var y2 = sizes[i+1]

    var a = (y2-y1) / (x2-x1)
    var b = (x2*y1 - x1*y2) / (x2 - x1)

    values.push(`calc(${a * 100}vw + ${b}px)`)
  }

  for (var i = 0; i < viewportWidths.length-1; i++) {
    if (viewportWidth < viewportWidths[i]) {
      return values[i-1]
    }
  }

  return values
}

export default viewportInterpolator
