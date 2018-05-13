import { socketTypes } from '../actions'

const minievents = (state = [], action) => {
  switch (action.type) {
    case socketTypes.INIT: return action.payload.minievents
    case socketTypes.NEW_MINIEVENT:
      let newMinievents = state.slice(0)
      newMinievents.push(action.payload.minievent)
      return newMinievents
    default: return state
  }
}

export default minievents
