import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import general from './general'
import error from './error'
import socket from './socket'
// import auth from './auth'
// import team from './team'
// import participants from './participants'
// import popup from './popup'
// import signup from './signup'
// import badges from './badges'
// import mentions from './mentions'

import event from './event'
import minievents from './minievents'

export default combineReducers({
  // auth,
  // team,
  // participants,
  // popup,
  // signup,
  // mentions,
  routerReducer,
  socket,
  error,
  general,
  event,
  minievents
})
