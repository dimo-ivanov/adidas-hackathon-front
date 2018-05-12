import { authTypes, teamTypes, socketTypes } from '../actions'
import { Auth } from '../helpers'

const initialState = {
  isAuthenticated: false,
  token: '',
  user: {}
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: Auth.getToken(),
        user: Auth.getUser()
      }
    case authTypes.FAIL:
      return { ...state, isAuthenticated: false }
    case teamTypes.SAVE_MINE:
      if (action.payload) {
        action = action.payload
      }
      Auth.saveMyTeamId(action.team)
      return {
        ...state,
        user: Auth.getUser()
      }
    case socketTypes.REMOVED_FROM_TEAM:
      Auth.removeMyTeamId()
      return {
        ...state,
        user: Auth.getUser()
      }
    default: return state
  }
}

export default auth
