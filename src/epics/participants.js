import { Observable } from 'rxjs'
import { participantTypes, errorTypes } from '../actions'
import { apiUrl } from '../config/settings'
import { Headers } from '../helpers'

export const getEpic = (action$) => {
  return action$.ofType(participantTypes.GET)
    .switchMap(({ id }) => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/participants/${id}`,
            method: 'GET',
            headers: Headers.getWithAuth()
          }
        )
        .map(res => ({ type: participantTypes.GET_RESPONSE, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const getResponseEpic = (action$) => {
  return action$.ofType(participantTypes.GET_RESPONSE)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            const { participant } = action.payload
            obs.next({ type: participantTypes.UPDATE, participant })
            obs.complete()
          }

          obs.next({ type: errorTypes.DISPLAY, err: action.payload.err })
        })
        .catch(err => window.alert(err))
    })
}
