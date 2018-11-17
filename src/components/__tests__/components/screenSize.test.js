import * as screenSize from '../../../helpers/screenSize'

it('should check screen orientation', () => {
  expect(screenSize.HORIZONTAL_ORIENTATION).toMatch('horizontal')
  expect(screenSize.VERTICAL_ORIENTATION).toMatch('vertical')
  expect(screenSize.VERTICAL_SCROLLABLE).toMatch('verticalScrollable')
})