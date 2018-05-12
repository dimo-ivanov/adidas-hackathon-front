import { socketTypes } from '../actions'

const initialState = {
  inviteBadges: [],
}

const filterBadges = (cloneState, action) => {
  return action.payload.badges.filter(b => b.type === 'Invite');
}

const badges = (state = initialState, action) => {
  switch (action.type) {
    case socketTypes.INIT:
      return {
        ...state,
        inviteBadges: filterBadges(Object.assign({}, state), action)
      }
    default:
      return state
  }
}

export default badges
