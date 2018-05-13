import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import general from './general'
import auth from './auth'
import socket from './socket'
import team from './team'
import participants from './participants'
import popup from './popup'
import error from './error'
import signup from './signup'
// import badges from './badges'
import mentions from './mentions'

import event from './event'
import minievents from './minievents'

export default combineReducers({
  routerReducer,
  general,
  auth,
  socket,
  team,
  participants,
  popup,
  error,
  signup,
  mentions,
  event,
  minievents
})
