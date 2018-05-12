export const teamTypes = {
  REGISTER: 'team/REGISTER',
  REG_RESPONSE: 'team/REGISTER_RESPONSE',
  REG_SUCCESS: 'team/REG_SUCCESS',
  GET_MINE: 'team/GET_MINE',
  GET_MINE_RESPONSE: 'team/GET_MINE_RESPONSE',
  SAVE_MINE: 'team/SAVE_MINE',
  SAVE_TEAMS: 'team/SAVE_TEAMS',
  UPDATE: 'team/UPDATE',
  MANAGE: 'team/MANAGE_MINE',
  MANAGE_RES: 'team/MANAGE_RESPONSE',
  GET_ALL: 'team/GET_ALL',
  GET_ALL_RESPONSE: 'team/GET_ALL_RESPONSE',
  JOIN: 'team/JOIN',
  JOIN_RESPONSE: 'team/JOIN_RESPONSE'
}

export const teamRegister = (data) => (
  {
    type: teamTypes.REGISTER,
    data
  }
)

export const teamManage = (data) => (
  {
    type: teamTypes.MANAGE,
    data
  }
)

export const getMyTeam = (data) => (
  {
    type: teamTypes.GET_MINE
  }
)

export const getTeams = () => (
  {
    type: teamTypes.GET_ALL
  }
)

export const joinTeam = (id) => (
  {
    type: teamTypes.JOIN,
    id
  }
)
