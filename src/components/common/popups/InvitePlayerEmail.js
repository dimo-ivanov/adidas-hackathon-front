import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import './InvitePlayerEmail.css'

class InvitePlayerEmail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      name: '',
      error: this.props.error
    }

    this.submitForm = this.submitForm.bind(this)
    this.dismissPopup = this.dismissPopup.bind(this)

  }

  componentWillReceiveProps(props, state){
    if(this.state.error !== props.error){
      this.setState({error: props.error})
    }
  }

  submitForm (ev) {
    if(this.isValid()){
      this.props.dispatch(actions.inviteViaMail({...this.state}));
    }
  }

  isValid(){
    this.setState({error: ''})
    let nameChecker = RegExp('[A-Za-zА-Яа-я\'`]{2}', 'g')
    let emailChecker = RegExp(/\S+@\S+\.\S+/)
    if(!nameChecker.test(this.state.name)){
      this.setState({error: 'Name is invalid'})
      return false
    }
    if(!emailChecker.test(this.state.email)){
      console.log("REALLY!!", emailChecker.test(this.state.email), this.state.email)
      this.setState({error: 'Email is invalid'})
      return false
    }
    return true
  }

  dismissPopup () {
    this.props.dispatch(actions.switchEmailInvite({}))
  }

  changeInput(key, ev){
    this.setState({[key]: ev.target.value})
  }

  render () {
    return (
      <div className='dashboard-hey email-invite'>
        <div className='hey-popup' style={{ background: 'white' }}>
          <div className='hey-popup-header'>
            <div className='header-text'>INVITE PLAYER</div>

            <img alt='' src='/imgs/close.png' onClick={this.dismissPopup} />
          </div>
          <div className='hey-popup-content'>
            <input value={this.state.name || ''} onChange={this.changeInput.bind(this, 'name')} type="text" placeholder="Name" />
            <input value={this.state.email || ''} onChange={this.changeInput.bind(this, 'email')} type="text" placeholder="Email" />
            {this.state.error && (
              <h4><small className="red">{this.state.error}</small></h4>
            )}
          </div>
          <div className='hey-popup-button-cont'>
            <button
              onClick={this.submitForm}
              className='button-bt '>send <img alt='' src='/imgs/white-send.png' /></button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.popup.errors,
  }
}

export default connect(mapStateToProps)(InvitePlayerEmail)
