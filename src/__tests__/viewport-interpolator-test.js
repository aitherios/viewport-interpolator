jest.unmock('../viewport-interpolator')

import viewportInterpolator from '../viewport-interpolator'

describe('viewportInterpolator()', () => {
  let subject

  it('is a function', () => {
    subject = viewportInterpolator
    expect(subject).toEqual(jasmine.any(Function))
  })
})
