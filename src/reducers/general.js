import { authTypes, generalTypes, socketTypes, teamTypes, participantTypes, inviteTypes, eventTypes } from '../actions'

const initialState = {
  loading: false,
  counter: 0,
  alert: ''
}

const general = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.ATTEMPT:
      return { ...state, loading: true }
    case authTypes.RESPONSE:
      return { ...state, loading: false }
    case authTypes.FAIL:
      return { ...state, loading: false }
    case socketTypes.CONNECT:
      return { ...state, loading: true }
    case socketTypes.SUCCESS:
      return { ...state, loading: false }
    case socketTypes.NEW_NOTIF:
      return { ...state, counter: state.counter + 1, alert: 'New notification recieved.' }
    case generalTypes.DISPLAY_ALERT:
      if (action.payload) {
        action = action.payload
      }
      return { ...state, counter: state.counter + 1, alert: action.text }
    case generalTypes.GET_INIT_DATA:
      return { ...state, loading: true }
    case generalTypes.INIT_DATA_RES:
      return { ...state, loading: false }
    case teamTypes.REGISTER:
      return { ...state, loading: true }
    case teamTypes.REG_RESPONSE:
      return { ...state, loading: false }
    case teamTypes.MANAGE:
      return { ...state, loading: true }
    case teamTypes.MANAGE_RES:
      return { ...state, loading: false }
    case teamTypes.GET_MINE:
      return { ...state, loading: true }
    case teamTypes.GET_MINE_RESPONSE:
      return { ...state, loading: false }
    case teamTypes.GET_ALL:
      return { ...state, loading: true }
    case teamTypes.GET_ALL_RESPONSE:
      return { ...state, loading: false }
    case teamTypes.JOIN:
      return { ...state, loading: true }
    case teamTypes.JOIN_RESPONSE:
      return { ...state, loading: false }
    case participantTypes.GET:
      return { ...state, loading: true }
    case participantTypes.GET_RESPONSE:
      return { ...state, loading: false }
    case inviteTypes.EMAIL_INVITE:
      return { ...state, loading: true }
    case inviteTypes.EMAIL_INVITE_FAIL:
      return { ...state, loading: false }
    case inviteTypes.EMAIL_INVITE_SUCCESS:
      return { ...state, loading: false }
    case eventTypes.GET:
      return { ...state, loading: true }
    case eventTypes.GET_RESPONSE:
      return { ...state, loading: false }
    default: return state
  }
}

export default general
