import { popupTypes, inviteTypes } from '../actions'

const initialState = {
  payload: {},
  showApplyTeam: false,
  showInvitePlayer: false,
  showNotification: false,
  showEmailInvite: false,
  errors: ''
}

const popup = (state = initialState, action) => {
  switch (action.type) {
    case popupTypes.SWITCH_APPLY_TEAM:
      return {
        ...state,
        showApplyTeam: !state.showApplyTeam,
        payload: action.payload || {}
      }
    case popupTypes.SWITCH_INVITE_PLAYER:
      return {
        ...state,
        showInvitePlayer: !state.showInvitePlayer,
        payload: action.payload || {}
      }
    case popupTypes.SWITCH_NOTIFICATION:
      return {
        ...state,
        showNotification: !state.showNotification,
        payload: action.payload || {}
      }
    case popupTypes.SWITCH_EMAIL_INVITE:
      return {
        ...state,
        showEmailInvite: !state.showEmailInvite,
        payload: action.payload || {}
      }
    case inviteTypes.EMAIL_INVITE_FAIL: {
      return {
        ...state,
        errors: action.payload ? action.payload.error : 'Server connection error!'
      }
    }
    case inviteTypes.EMAIL_INVITE_SUCCESS:
      return {
        ...state,
        showEmailInvite: false
      }
    default: return state
  }
}

export default popup
