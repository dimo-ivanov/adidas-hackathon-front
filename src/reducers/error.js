import { errorTypes, authTypes } from '../actions'

const initialState = {
  display: false,
  message: ''
}

const error = (state = initialState, action) => {
  switch (action.type) {
    case errorTypes.DISPLAY:
      return {
        display: true,
        message: action.err
      }
    case authTypes.ATTEMPT:
      return { ...initialState }
    default: return state
  }
}

export default error
