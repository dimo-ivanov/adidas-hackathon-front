export const socketTypes = {
  CONNECT: 'socket/CONNECT',
  SUCCESS: 'socket/CONNECT_SUCCESS',
  INIT: 'socket/INIT_DATA',
  SEND_MSG: 'socket/SEND_MESSAGE',
  NEW_MSG: 'socket/NEW_MESSAGE',
  UPDATE_SESSION: 'socket/UPDATE_SESSION',
  SEND_NOTIF: 'socket/SEND_NOTIFICATION',
  NEW_NOTIF: 'socket/NEW_NOTIFICATION',
  REMOVE_NOTIF: 'socket/REMOVE_NOTIFICATION',
  NOTIF_UPDATE: 'socket/NOTIFICATION_UPDATE',
  REMOVED_FROM_TEAM: 'socket/REMOVED_FROM_TEAM',
  CREATE_MINIEVENT: 'socket/CREATE_MINIEVENT',
  NEW_MINIEVENT: 'socket/NEW_MINIEVENT',
  LIKE_MINI: 'socket/LIKE_MINIEVENT'
}

export const socketConnect = (data) => (
  {
    type: socketTypes.CONNECT,
    data
  }
)

export const socketSendMessage = (data) => (
  {
    type: socketTypes.SEND_MSG,
    data
  }
)

export const socketCreateEvent = (data) => (
  {
    type: socketTypes.CREATE_MINIEVENT,
    data
  }
)
