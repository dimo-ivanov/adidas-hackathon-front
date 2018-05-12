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
  REMOVED_FROM_TEAM: 'socket/REMOVED_FROM_TEAM'
}

export const socketConnect = () => (
  {
    type: socketTypes.CONNECT
  }
)

export const socketSendMessage = (data) => (
  {
    type: socketTypes.SEND_MSG,
    data
  }
)
