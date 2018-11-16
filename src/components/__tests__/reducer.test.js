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

  it('should return the state with the added PDF File', () => {
    const action = {
      type: actionTypes.ADD_PDF_FILE,
      filePDF: 'test'
    }
    expect(reducer(initialState, action)).toEqual({...initialState, filePDF: action.filePDF})
  })
})
