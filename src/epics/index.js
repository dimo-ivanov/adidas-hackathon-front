import { combineEpics } from 'redux-observable'
// import * as auth from './auth'
// import * as socket from './socket'
// import * as team from './team'
// import * as participants from './participants'
// import * as general from './general'
// import { signUpEpic, resetPasswordEpic, navigateAfterReset } from './signup'
import { inviteEmailEpic } from './invites'

import * as events from './events'

export const rootEpic = combineEpics(
  // auth.attemptEpic, auth.responseEpic, auth.failEpic, auth.syncEpic, auth.syncResEpic,
  // socket.connectEpic, socket.initListenerEpic, socket.listenerEpic, socket.senderEpic,
  // team.registerEpic, team.regResponseEpic, team.getAllEpic, team.getAllResponseEpic,
  // team.joinEpic, team.joinResponseEpic, team.manageEpic, team.manageResEpic,
  // team.getMineEpic, team.getMineResponse,
  // participants.getEpic, participants.getResponseEpic,
  // general.getInitDataEpic, general.initDataResEpic,
  // signUpEpic,
  // resetPasswordEpic,
  // navigateAfterReset,
  inviteEmailEpic,
  events.getEventEpic, events.getEventResEpic
)
