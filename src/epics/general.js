import { Observable } from 'rxjs'
import { apiUrl } from '../config/settings'
import { teamTypes, participantTypes, generalTypes, errorTypes } from '../actions'
import { Headers } from '../helpers'

export const getInitDataEpic = (action$) => {
  return action$.ofType(generalTypes.GET_INIT_DATA)
    .switchMap(action => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/general/`,
            method: 'GET',
            headers: Headers.getWithAuth()
          }
        )
        .map(res => ({ type: generalTypes.INIT_DATA_RES, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const initDataResEpic = (action$) => {
  return action$.ofType(generalTypes.INIT_DATA_RES)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            const { teams, participants } = action.payload
            obs.next({ type: teamTypes.GET_ALL_RESPONSE, payload: { success, teams } })
            obs.next({ type: participantTypes.SAVE, participants })
            obs.complete()
          }

          obs.next({ type: errorTypes.DISPLAY, err: 'Loading data was unsuccessfull.' })
          obs.complete()
        })
        .catch(err => window.alert(err))
    })
}
