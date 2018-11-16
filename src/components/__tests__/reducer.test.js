import reducer from '../../store/reducers/reducer'
import * as actionTypes from '../../store/actions/actions'

describe('Testing reducers', () => {

  const initialState = {
    filePDF: null,
    fileExtracted: null,
    receipts: [],
    tags: [],
    auth_token: null
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})
