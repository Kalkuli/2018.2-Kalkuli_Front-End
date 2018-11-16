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

  it('should return the state with the added fileExtracted', () => {
    const action = {
      type: actionTypes.ADD_EXTRACTED_DATA,
      fileExtracted: {
        cnpj: '1233455678',
        date: '10-10-2018'
      }
    }
    expect(reducer(initialState, action)).toEqual({...initialState, fileExtracted: action.fileExtracted})
  })

  it('should return the state with the added receipt array', () => {
    const action = {
      type: actionTypes.ADD_RECEIPTS,
      receipts: [{
        title: 'Nota 10',
        tag_id: 1,
        description: 'testing'
      }]
    }
    expect(reducer(initialState, action)).toEqual({...initialState, receipts: action.receipts})
  })

})
