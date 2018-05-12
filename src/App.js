import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './stores'
import Routes from './components/routes/Routes'
import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App

// import { Provider } from 'react-redux'
// import {
//   ConnectedRouter
// } from 'react-router-redux'
// import { store, history } from './stores'
// import { Route, Switch } from 'react-router'
// import { routes } from './config/routes'

// < Provider store = { store } >
//   <ConnectedRouter history={history}>
//     <div className='dashboard-wrap'>
//       <Switch>
//         <Route path='/' exact />
//         {routes.map((route, index) => (
//           <Route
//             key={index}
//             exact={route.exact}
//             path={route.path}
//             component={route.component}
//             something='foo'
//           />
//         ))}

//       </Switch>
//     </div>
//   </ConnectedRouter>
//     </Provider >
