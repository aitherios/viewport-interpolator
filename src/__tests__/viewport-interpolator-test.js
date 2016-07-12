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

describe('viewportInterpolator(...) with ordered points', () => {
  beforeEach(() => {
    subject = viewportInterpolator([320, 16], [768, 18], [1360, 22], [1920, 30])
  })

  it('returns a function', () => {
    expect(subject).toEqual(jasmine.any(Function))
  })

  it('interpolates for 320', () => {
    expect(subject(320)).toBe('calc(0.4464285714285714vw + 14.571428571428571px)')
  })

  it('interpolates bellow 320, extrapolating first value', () => {
    expect(subject(1)).toBe('calc(0.4464285714285714vw + 14.571428571428571px)')
  })

  it('interpolates for 768', () => {
    expect(subject(768)).toBe('calc(0.6756756756756757vw + 12.81081081081081px)')
  })

  it('interpolates for 1360', () => {
    expect(subject(1360)).toBe('calc(1.4285714285714286vw + 2.5714285714285716px)')
  })

  it('interpolates for 1920', () => {
    expect(subject(1920)).toBe('calc(1.4285714285714286vw + 2.5714285714285716px)')
  })

  it('interpolates above 1920, extrapolating last value', () => {
    expect(subject(2000)).toBe('calc(1.4285714285714286vw + 2.5714285714285716px)')
  })
})
