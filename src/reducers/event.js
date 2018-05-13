import { eventTypes } from '../actions'

const event = (state = {}, action) => {
  switch (action.type) {
    case eventTypes.SAVE: return action.event
    default: return state
  }
}

export default event
