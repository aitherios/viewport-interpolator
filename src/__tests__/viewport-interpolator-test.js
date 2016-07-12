jest.unmock('../viewport-interpolator')

import viewportInterpolator from '../viewport-interpolator'

let subject

describe('viewportInterpolator', () => {
  beforeEach(() => {
    subject = viewportInterpolator
  })

  it('is a function', () => {
    expect(subject).toEqual(jasmine.any(Function))
  })
})

describe('viewportInterpolator(...)', () => {
  beforeEach(() => {
    subject = viewportInterpolator([320, 16], [768, 18], [1360, 22], [1920, 30])
  })

  it('returns a function', () => {
    expect(subject).toEqual(jasmine.any(Function))
  })

  it('interpolates for 320', () => {
    expect(subject(320)).toBe('calc(0.4464285714285714vw + 14.571428571428571px)')
  })
})
