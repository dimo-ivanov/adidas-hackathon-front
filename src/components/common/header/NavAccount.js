import React, { Component } from 'react'
import { connect } from 'react-redux'
import SocialButton from './SocialButton'
import { Auth } from '../../../helpers'
import { linkedInAppId } from '../../../config/settings'
import * as actions from '../../../actions'

import './styles.css'

class NavAccount extends Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.expandUserMenu = this.expandUserMenu.bind(this)
    this.handleSocialLogin = this.handleSocialLogin.bind(this)
    this.handleSocialLoginFailure = this.handleSocialLoginFailure.bind(this)
  }

  expandUserMenu () {
    this.setState({ expanded: !this.state.expanded })
  }

  handleSocialLogin (profileData) {
    profileData = JSON.parse(JSON.stringify(profileData))
    this.props.dispatch(actions.authSync(profileData))
  }

  handleSocialLoginFailure (err) {
    err.toString().includes('Authentication failed') &&
      this.props.dispatch(actions.displayAlert('Authentication failed.'))
  }

  render () {
    const accounts = this.props.auth.user
      ? (this.props.auth.user.social_accounts || {})
      : {}
    const avatar = this.props.auth.user ? this.props.auth.user.avatar : ''

    return (
      <div className='nav-account'>
        <div className='nav'>

          {accounts.linkedin && (
            <div className='item'>
              <a href={accounts.linkedin.publicProfileUrl} className='link'>
                <img alt='' src='/imgs/social-in.png' width={29} height={46} />
                <span className='synced'><img alt='' src='/imgs/synced.png' /></span>
              </a>
            </div>
          )}

          {accounts.facebook && (
            <div className='item'>
              <a href='' className='link'>
                <img alt='' src='/imgs/social-f.png' width={29} height={46} />
                <span className='synced'><img alt='' src='/imgs/synced.png' /></span>
              </a>
            </div>
          )}

          <div className='item'>
            <a href='' className='link'>
              <img alt='' src='/imgs/social.png' width={29} height={46} />
              <span className='referal'><img alt='' src='/imgs/referal.png' /></span>
              <span className='num'>{this.props.inviteBadges.length}</span>
            </a>
          </div>

        </div>
        <div className='divider'>|</div>
        <div className='user'>
          <div className='user-photo'
            style={{ background: `url(${avatar}) no-repeat center /cover` }}><img alt='' /></div>
          <div className='user-info'>
            <span className='user-name cursor-pointer' onClick={this.expandUserMenu}>{Auth.getName()}</span>
            {this.state.expanded &&
              <div className='user-menu'>
                <SocialButton
                  provider='linkedin'
                  appId={linkedInAppId}
                  onLoginSuccess={this.handleSocialLogin}
                  onLoginFailure={this.handleSocialLoginFailure}>
                  Sync with LinkedIn
                </SocialButton>
                {/* <SocialButton
                  provider='facebook'
                  appId={facebookAppId}
                  onLoginSuccess={this.handleSocialLogin}
                  onLoginFailure={this.handleSocialLoginFailure}>
                  Sync with Facebook
                </SocialButton> */}
                <div className='cursor-pointer menu-link' onClick={() => {
                  // console.log("HEHE");
                  this.props.dispatch(({
                    type: 'auth/FAIL'
                  }))
                }}>Sign Out</div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    inviteBadges: state.badges.inviteBadges
  }
}

export default connect(mapStateToProps)(NavAccount)
