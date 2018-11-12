import * as actionTypes from '../actions/actions'

const initialState = {
  filePDF: null,
  fileExtracted: null,
  receipts: [],
  tags: [],
  auth_token: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PDF_FILE:
      return {
        ...state,
        filePDF: action.filePDF
      }
    case actionTypes.ADD_EXTRACTED_DATA:
      return {
        ...state,
        fileExtracted: action.fileExtracted
      }
    case actionTypes.ADD_RECEIPTS:
      return {
        ...state,
        receipts: action.receipts
      }
    case actionTypes.ADD_TAGS: 
      return {
        ...state,
        tags: action.tags
      }
    case actionTypes.ADD_AUTH_TOKEN: {
      return {
        ...state,
        auth_token: action.auth_token
      }
    }
    default:
      return state  
  }
}

export default reducer