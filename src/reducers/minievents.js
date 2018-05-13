import { socketTypes } from '../actions'

const minievents = (state = [], action) => {
  switch (action.type) {
    case socketTypes.INIT: return action.payload.minievents
    default: return state
  }
}

export default minievents
