import { teamTypes, socketTypes } from '../actions'
import { Auth } from '../helpers'

const initialState = {
  myTeam: {},
  teams: []
}

const team = (state = initialState, action) => {
  switch (action.type) {
    case teamTypes.REG_SUCCESS:
      let teams = state.teams.slice(0)
      teams.push(action.team)
      return {
        ...state,
        teams
      }
    case teamTypes.SAVE_MINE:
      if (action.payload) {
        action = action.payload
      }
      let newTeam = (action.team && action.team.participants.indexOf(Auth.getParticipant()) > -1)
        ? action.team : {}
      return {
        ...state,
        myTeam: newTeam
      }
    case teamTypes.SAVE_TEAMS:
      return {
        ...state,
        teams: action.teams || []
      }
    case teamTypes.UPDATE:
      teams = state.teams.slice(0)
      let index = teams.findIndex(t => t.id === action.team.id)
      teams[index] = action.team
      return {
        ...state,
        teams
      }
    case socketTypes.REMOVED_FROM_TEAM:
      return {
        ...state,
        myTeam: {}
      }
    default: return state
  }
}

export default team
