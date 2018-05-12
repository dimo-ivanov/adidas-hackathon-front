import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from './components/common/popups/AlertTemplate'

const options = {
  position: 'bottom left',
  timeout: 5000,
  offset: '30px',
  transition: 'fade'
}

class Root extends Component {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
