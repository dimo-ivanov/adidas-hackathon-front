import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import * as actions from '../../actions'
import './styles.css'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: ''
    }

    this.submitForm = this.submitForm.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    nextProps.isAuthenticated && this.props.dispatch(push('/'))
  }

  validMail (mail) {
    return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+\.{0,1})+([^<>().,;:\s@"]{2,}|[\d.]+))$/.test(mail)
  }

  submitForm (ev) {
    ev.preventDefault()
    if (this.validMail(this.state.email) && this.state.password !== '') {
      this.props.dispatch(actions.authAttempt({ email: this.state.email, password: this.state.password }))
    } else {
      this.setState({ error: 'Invalid credentials.' })
    }
  }

  render () {
    // const styling = {
    //   position: 'absolute',
    //   background: '#ffffff6e',
    //   width: '100%',
    //   height: '100%',
    //   zIndex: '1',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }
    return (
      <div className='dashboard-popup-welcome margin-auto'>
        <div>
          <div className='hey-popup-welcome'>
            <div className='hey-popup-header'>
              <div className='header-text'>
                LOGIN
                <span className='silver' style={{ paddingLeft: '3px' }}>
                  | NOT REGISTERED YET?
                </span> <a href='https://adidas-hack.com/'><span className='red'>DO IT HERE</span></a>
              </div>
              <img alt='' src='imgs/close.png' />
            </div>
            <div className='hey-popup-content'>
              <h1>
                WELCOME BACK, <br /> <span className='red'>PLAYER.</span>
              </h1>
              <div className='name-surname'>
                <div style={{ height: '20px' }}>
                  {(this.props.error.display || this.state.error) && (
                    <span className='red'>{this.props.error.message || this.state.error}</span>
                  )}
                </div>
                {/* <div className='silver-name' style={{ paddingLeft: 5 }}>Email</div> */}
                <div className='red-border'>
                  <input
                    className='password-input'
                    value={this.state.email || ''}
                    onChange={ev => this.setState({ ...this.state, email: ev.target.value })}
                    type='text'
                    placeholder='Type in your email' />
                </div>
              </div>
              <div className='chat-message'>
                <form name='chat-message' onSubmit={this.submitForm}>
                  <input
                    className='password-input'
                    value={this.state.password || ''}
                    onChange={ev => this.setState({ ...this.state, password: ev.target.value })}
                    type='password'
                    placeholder='Password' />
                </form>
              </div>
              <div style={{ marginTop: 10 }}>
                <button className='button-bt ' onClick={this.submitForm}>submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      // <div className='wrapper'>
      //   <div className='centered-items'>
      //     <div className='main-col-cell'>
      //       <div className='dashboard-teams'>
      //         <div className='headline'>
      //           <div className='row'>
      //             <div>
      //               <h4>Signing In</h4>
      //               {this.props.error.display && (
      //                 <h4 className='red'><small>{this.props.error.message}</small></h4>
      //               )}
      //             </div>
      //           </div>
      //         </div>
      //         <div className='inputs'>
      //           <input
      //             value={this.state.email || ''}
      //             onChange={ev => this.setState({ ...this.state, email: ev.target.value })}
      //             type='text'
      //             placeholder='Type in your email' />
      //           <input
      //             value={this.state.password || ''}
      //             onChange={ev => this.setState({ ...this.state, password: ev.target.value })}
      //             type='password'
      //             placeholder='Password' />
      //           <button onClick={this.submitForm} className='button button-signup'>Submit</button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  }
}

export default connect(mapStateToProps)(LoginPage)
