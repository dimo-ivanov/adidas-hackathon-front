import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { withAlert } from 'react-alert'
import * as actions from '../../../actions'
import NavAccount from './NavAccount'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      location: 'SOFIA: ENHANCE THE FAN EXPERIENCE THROUGH TECH.'
    }
  }

  componentDidMount () {
    this.props.dispatch(actions.authSuccess())
    this.props.dispatch(actions.socketConnect())
    this.props.dispatch(actions.getInitData())
  }

  componentWillReceiveProps (nextProps) {
    nextProps.auth.isAuthenticated && this.setLocation(nextProps.auth.user.location)
    nextProps.general.counter > this.props.general.counter &&
    nextProps.alert.show(nextProps.general.alert)
  }

  setLocation (location) {
    let resolvedLocation
    location.includes('Barcelona') && (resolvedLocation = 'BARCELONA: INSPIRING CHANGE WITH CODE.')
    location.includes('Sofia') && (resolvedLocation = 'SOFIA: ENHANCE THE FAN EXPERIENCE THROUGH TECH.')
    location.includes('Madrid') && (resolvedLocation = 'MADRID: ENABLE SPORT THROUGH TECHNOLOGY.')
    location.includes('Amsterdam') && (resolvedLocation = 'AMSTERDAM: PERSONALIZE THE NEXT GEN SHOPPING EXPERIENCE.')

    resolvedLocation && this.setState({ location: resolvedLocation })
  }

  render () {
    return (
      <header>
        <div className='header'>
          <div className='header-adidas' onClick={() => this.props.dispatch(push('/'))}>
            <h4>ADIDAS HACKATHONS 2018 | {this.state.location}</h4>
          </div>
          <div className='header-middle'>
            <div className='nav-main'>
              <div className='item'>
                <Link
                  className={this.props.pathname === '/' ? 'active' : ''}
                  to='/'
                  title='Dashboard'>
                  <span>DASHBOARD</span>
                </Link>
              </div>
              <div className='item'>
                <Link
                  className={this.props.pathname.startsWith('/myteam') ? 'active' : ''}
                  to='/myteam'
                  title='MY TEAM'>
                  <span>MY TEAM</span>
                </Link>
              </div>
              {/* <div className='item'>
                <Link
                  className={this.props.pathname.startsWith('/feed') ? 'active' : ''}
                  to='/'
                  title='HACKATHON FEED'>
                  <span>HACKATHON FEED</span>
                </Link>
              </div> */}
            </div>
          </div>
          <div className='header-right'>
            <NavAccount />
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    pathname: state.routerReducer.location.pathname,
    general: state.general
  }
}

export default connect(mapStateToProps)(withAlert(Header))
