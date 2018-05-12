import { Observable } from 'rxjs'
import { push } from 'react-router-redux'
import { apiUrl } from '../config/settings'
import { teamTypes, errorTypes, popupTypes, generalTypes } from '../actions'
import { Headers, Auth } from '../helpers'

export const registerEpic = (action$) => {
  return action$.ofType(teamTypes.REGISTER)
    .switchMap(action => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/teams/create`,
            method: 'POST',
            headers: Headers.getWithAuth(),
            body: action.data
          }
        )
        .map(res => ({ type: teamTypes.REG_RESPONSE, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const regResponseEpic = (action$) => {
  return action$.ofType(teamTypes.REG_RESPONSE)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            const { team } = action.payload
            obs.next({ type: teamTypes.REG_SUCCESS, team })
            obs.next({ type: teamTypes.SAVE_MINE, team })
            obs.next(push('/myteam'))
            obs.complete()
          }

          obs.next({ type: errorTypes.DISPLAY, err: action.payload.err })
        })
        .catch(err => window.alert(err))
    })
}

export const manageEpic = (action$) => {
  return action$.ofType(teamTypes.MANAGE)
    .switchMap(action => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/teams/manage`,
            method: 'POST',
            headers: Headers.getWithAuth(),
            body: action.data
          }
        )
        .map(res => ({ type: teamTypes.MANAGE_RES, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const manageResEpic = (action$) => {
  return action$.ofType(teamTypes.MANAGE_RES)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            const { team } = action.payload
            obs.next({ type: teamTypes.SAVE_MINE, team })
            obs.next({ type: teamTypes.UPDATE, team })
            obs.next(push('/myteam'))
            obs.complete()
          }

          obs.next({ type: errorTypes.DISPLAY, err: action.payload.err })
          obs.complete()
        })
        .catch(err => window.alert(err))
    })
}

export const getMineEpic = (action$) => {
  return action$.ofType(teamTypes.GET_MINE)
    .switchMap(() => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/teams/mine`,
            method: 'GET',
            headers: Headers.getWithAuth()
          }
        )
        .map(res => ({ type: teamTypes.GET_MINE_RESPONSE, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const getMineResponse = (action$) => {
  return action$.ofType(teamTypes.GET_MINE_RESPONSE)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            const { myTeam } = action.payload
            obs.next({ type: teamTypes.SAVE_MINE, team: myTeam })
            obs.complete()
          }

          obs.next({ type: errorTypes.DISPLAY, err: action.payload.err })
        })
        .catch(err => window.alert(err))
    })
}

export const getAllEpic = (action$) => {
  return action$.ofType(teamTypes.GET_ALL)
    .switchMap(() => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/teams/`,
            method: 'GET',
            headers: Headers.getWithAuth()
          }
        )
        .map(res => ({ type: teamTypes.GET_ALL_RESPONSE, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const getAllResponseEpic = (action$) => {
  return action$.ofType(teamTypes.GET_ALL_RESPONSE)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            let { teams } = action.payload
            const myTeam = teams.find(t => t.id === Auth.getMyTeamId()) || Auth.getMyTeamId()
            obs.next({ type: teamTypes.SAVE_MINE, team: myTeam })
            obs.next({ type: teamTypes.SAVE_TEAMS, teams })
            obs.complete()
          }

          obs.next({ type: errorTypes.DISPLAY, err: action.payload.err })
        })
        .catch(err => window.alert(err))
    })
}

export const joinEpic = (action$) => {
  return action$.ofType(teamTypes.JOIN)
    .switchMap(action => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/teams/join/${action.id}`,
            method: 'GET',
            headers: Headers.getWithAuth()
          }
        )
        .map(res => ({ type: teamTypes.JOIN_RESPONSE, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const joinResponseEpic = (action$) => {
  return action$.ofType(teamTypes.JOIN_RESPONSE)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            const { team } = action.payload
            obs.next({ type: teamTypes.SAVE_MINE, team })
            obs.next({ type: popupTypes.SWITCH_NOTIFICATION, payload: {} })
            obs.next({ type: generalTypes.DISPLAY_ALERT, text: 'Successful operation.' })
            obs.complete()
          }

          obs.next({ type: errorTypes.DISPLAY, err: action.payload.err })
        })
        .catch(err => window.alert(err))
    })
}
