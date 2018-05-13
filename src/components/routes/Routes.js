import React from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router'
// import PrivateRoute from './PrivateRoute'
import { history } from '../../stores'
import { routes } from '../../config/routes'
// import { Auth } from '../../helpers'
// import Header from '../common/header/Header'
// import LoginPage from '../users/LoginPage'
import PopupSwitcher from '../common/popups/PopupSwitcher'
// import { SignUp } from '../../screens'
import Loader from '../common/popups/Loader'
import NotFound from './NotFound'
// import { withRouter } from 'react-router-dom'

const Routes = (props) => (
  <ConnectedRouter history={history}>
    <div className='dashboard-wrap'>
      {/* {(Auth.isUserAuthenticated() || props.isAuthenticated) && <Header />} */}
      {props.loading && <Loader />}

      <Switch>
        {/* <Route path='/login' component={LoginPage} /> */}
        {/* <Route path='/signup/:id' component={SignUp} /> */}
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component} />
        ))}
        <Route component={NotFound} />
      </Switch>

      {props.showPopup && <PopupSwitcher />}
    </div>
  </ConnectedRouter>
)

const mapStateToProps = (state) => {
  return {
    loading: state.general.loading
    // isAuthenticated: state.auth.isAuthenticated,
    // showPopup: Object.values(state.popup).indexOf(true) > -1
  }
}

export default connect(mapStateToProps)(Routes)
