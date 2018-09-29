import * as actionTypes from '../actions/actions'

const initialState = {
  fileBLOB: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_FILE:
      console.log(action.file)
      return {
        ...state,
        fileBLOB: action.file
      }
    default:
      return state  
  }
}

export default reducer