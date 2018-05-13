import { Observable } from 'rxjs'
import { apiUrl } from '../config/settings'
import { errorTypes, eventTypes } from '../actions'

export const getEventEpic = (action$) => {
  return action$.ofType(eventTypes.GET)
    .switchMap(action => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/events/${action.code}`,
            method: 'GET'
          }
        )
        .map(res => ({ type: eventTypes.GET_RESPONSE, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const getEventResEpic = (action$) => {
  return action$.ofType(eventTypes.GET_RESPONSE)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            const { event } = action.payload
            obs.next({ type: eventTypes.SAVE, event })
          } else {
            const { message } = action.payload
            obs.next({ type: errorTypes.DISPLAY, err: message })
          }

          obs.complete()
        })
        .catch(err => window.alert(err))
    })
}
