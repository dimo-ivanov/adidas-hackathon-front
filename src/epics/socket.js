import io from 'socket.io-client'
import { Observable } from 'rxjs'
import { socketTypes } from '../actions'
import { socketUrl } from '../config/settings'
// import { Auth } from '../helpers'

const events = {
  INIT: 'socket-init',
  MESSAGE: 'socket-message',
  NOTIFICATION: 'socket-notification'
}

let socket

export const connectEpic = (action$) => {
  return action$.ofType(socketTypes.CONNECT)
    .switchMap((action) => {
      return Observable
        .create(obs => {
          socket = io(socketUrl, { query: action.data })
          obs.next({ type: socketTypes.SUCCESS, socket })
          obs.complete()
        })
        .catch(err => window.alert(err))
    })
}

export const initListenerEpic = (action$) => {
  return action$.ofType(socketTypes.CONNECT)
    .mergeMap(() =>
      Observable
        .fromEvent(socket, events.INIT)
        .switchMap(socketEvent => {
          return Observable.of(({ type: socketTypes.INIT, payload: { ...socketEvent } }))
        })
    )
}

export const listenerEpic = (action$) => {
  return action$.ofType(socketTypes.SUCCESS)
    .mergeMap(() =>
      Observable
        .fromEvent(socket, events.MESSAGE)
        .switchMap(socketEvent => {
          return Observable.of(({ type: socketEvent.action, payload: { ...socketEvent } }))
        })
    )
}

export const senderEpic = (action$) => {
  return action$.ofType(socketTypes.SEND_MSG)
    .switchMap(({ data }) => {
      return Observable.create(obs => {
        socket.emit(events.MESSAGE, { ...data })
        obs.complete()
      })
        .catch(err => console.log(err))
    })
}
