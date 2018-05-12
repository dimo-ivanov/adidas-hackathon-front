import { participantTypes } from '../actions/participant'

const participants = (state = [], action) => {
  switch (action.type) {
    case participantTypes.SAVE:
      return action.participants
    case participantTypes.UPDATE:
      let newParticipants = state.slice(0)
      newParticipants.forEach(p => { p.id === action.participant.id && (p = action.participant) })
      return newParticipants
    default: return state
  }
}

export default participants
