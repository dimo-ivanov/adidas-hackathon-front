import { socketTypes } from '../actions'

const addNewMessage = (sessions, msg) => {
  let session = { ...sessions.find(s => s._id === msg.session) }
  let messages = session.msg.slice(0)
  !messages.find(m => m._id === msg._id) && messages.push(msg)
  session = Object.assign({}, session, { msg: messages })
  // let newSessions = [...sessions]
  const index = sessions.findIndex(s => s._id === session._id)
  sessions[index] = session
  return sessions
  // return {}

  // if (msg.session === state.generalChat._id) {
  //   let messages = state.generalChat.msg.slice(0)
  //   return {generalChat: Object.assign({}, state.generalChat, { msg: messages })}
  // }

  // if (msg.session === state.teamChat._id) {
  //   let messages = state.teamChat.msg.slice(0)
  //   !messages.find(m => m._id === msg._id) && messages.push(msg)
  //   return {teamChat: Object.assign({}, state.teamChat, { msg: messages })}
  // }
}

const initialState = {
  sessions: [],
  notifications: []
}

const socket = (state = initialState, action) => {
  switch (action.type) {
    case socketTypes.INIT:
      return {
        ...state,
        sessions: action.payload.sessions,
        notifications: action.payload.notifications
      }
    case socketTypes.NEW_MSG:
      let newSessions = addNewMessage([...state.sessions], action.payload.msg)
      return {
        ...state,
        sessions: newSessions
      }
    case socketTypes.UPDATE_SESSION:
      newSessions = state.sessions.slice(0)
      let newSession = action.payload.session
      let index = newSessions.findIndex(s => s._id === newSession._id)
      index > -1 ? newSessions[index] = newSession : newSessions.push(newSession)
      return {
        ...state,
        sessions: newSessions
      }
    case socketTypes.NEW_NOTIF:
      let newNotifications = [...state.notifications]
      newNotifications.push(action.payload.notif)
      return {
        ...state,
        notifications: newNotifications
      }
    case socketTypes.REMOVE_NOTIF:
      newNotifications = state.notifications
        .filter(n => n._id !== action.payload.id)
        .slice(0)
      return {
        ...state,
        notifications: newNotifications
      }
    case socketTypes.NOTIF_UPDATE:
      newNotifications = state.notifications.slice(0)
      index = newNotifications.findIndex(n => n._id === action.payload.notif._id)
      newNotifications[index] = action.payload.notif
      return {
        ...state,
        notifications: newNotifications
      }
    case socketTypes.REMOVED_FROM_TEAM:
      newSessions = state.sessions.slice(0)
      index = newSessions.findIndex(s => s.type === 'team_chat')
      newSessions.splice(index, 1)
      return {
        ...state,
        sessions: newSessions
      }
    default: return state
  }
}

export default socket
