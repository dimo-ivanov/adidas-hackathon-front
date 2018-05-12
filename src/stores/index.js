import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import reducers from '../reducers'

import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from '../epics'

const epicMiddleware = createEpicMiddleware(rootEpic)
const history = createHistory()

const middleware = []
middleware.push(logger)
middleware.push(routerMiddleware(history))
middleware.push(epicMiddleware)

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

export {
  store,
  history
}
