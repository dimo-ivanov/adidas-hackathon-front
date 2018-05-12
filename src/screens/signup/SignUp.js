import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './styles.css'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      digits: '',
      userCode: this.props.match.params.id,
      password: '',
      confPassword: ''
    }
  }

  componentWillReceiveProps (props, state) {
    if (props.done !== this.props.done) {
      this.props.history.push('/login')
    }
  }

  inputChange (name, e) {
    // console.log({[name]: e.target.value});
    this.setState({ [name]: e.target.value })
  }

  handleSubmit () {
    this.props.dispatch({ type: 'signup/SIGNUP', payload: { ...this.state } })
  }

  passwordReset () {
    if (this.state.password !== this.state.confPassword || this.state.password === '') {
      this.props.dispatch({ type: 'signup/PASSWORD_NOT_MATCH' })
    } else {
      this.props.dispatch({ type: 'signup/RESET_PASSWORD', payload: { token: this.props.token, password: this.state.password } })
    }
  }

  passwordChange (name, e) {
    let passwords = Object.assign({ [name]: e.target.value }, this.state.passwords)
    this.setState({ passwords: passwords })
  }

  renderTokenGeneration () {
    return (
      <div className='main-col-cell'>
        <div className='dashboard-teams'>
          <div className='headline'>
            <div className='row'>
              <div>
                <h4>Signing Up</h4>
                {this.props.error && (
                  <h4 className='red'><small>{this.props.error}</small></h4>
                )}
              </div>
            </div>
          </div>
          <div className='inputs'>
            <input value={this.state.email || ''} onChange={this.inputChange.bind(this, 'email')} type='text' placeholder='Type in your email' />
            <input value={this.state.digits || ''} onChange={this.inputChange.bind(this, 'digits')} type='text' placeholder='6-digit code' />
            <button onClick={this.handleSubmit.bind(this)} className='button'>Submit</button>
          </div>
        </div>
      </div>
    )
  }

  renderPasswordReset () {
    return (
      <div className='main-col-cell'>
        <div className='dashboard-teams'>
          <div className='headline'>
            <div className='row'>
              <div>
                <h4>Type in your new password</h4>
                {this.props.error && (
                  <h4 className='red'><small>{this.props.error}</small></h4>
                )}
              </div>
            </div>
          </div>
          <div className='inputs'>
            <input value={this.state.password || ''} onChange={this.inputChange.bind(this, 'password')} type='password' placeholder='New password' />
            <input value={this.state.confPassword || ''} onChange={this.inputChange.bind(this, 'confPassword')} type='password' placeholder='Confirm password' />
            <button onClick={this.passwordReset.bind(this)} className='button button-signup'>Submit</button>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='centered-items'>
          {!this.props.token && this.renderTokenGeneration()}
          {this.props.token && this.renderPasswordReset()}
        </div>
        {this.props.loading && (
          <div className='loading-indicator-wrap'>
            <div className='loader' />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.signup.token,
  loading: state.signup.loading,
  error: state.signup.error,
  done: state.signup.done
})

export default withRouter(connect(mapStateToProps)(SignUp))
