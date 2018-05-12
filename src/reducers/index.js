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
import badges from './badges'
import mentions from './mentions'

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
  badges,
  mentions
})
