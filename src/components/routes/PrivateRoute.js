import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import { Auth } from '../../helpers'

const PrivateRoute = ({ component: Component, players, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated()
      ? (players.length > 0 ? <Component {...props} /> : <div />)
      : (<Redirect to={
        { pathname: '/login', state: { from: props.location } }
      } />)
  )} />
)

const mapStateToProps = (state) => {
  return {
    players: state.participants
  }
}

export default connect(mapStateToProps)(PrivateRoute)
