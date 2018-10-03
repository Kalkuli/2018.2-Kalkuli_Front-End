import * as actionTypes from '../actions/actions'

const initialState = {
  filePDF: null,
  fileExtracted: null
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
    default:
      return state  
  }
}

export default reducer