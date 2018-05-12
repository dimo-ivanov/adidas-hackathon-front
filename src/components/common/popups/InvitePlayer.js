import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

class InvitePlayer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }

    this.submitForm = this.submitForm.bind(this)
    this.dismissPopup = this.dismissPopup.bind(this)
  }

  submitForm (ev) {
    if (!this.props.teamId) {
      this.props.dispatch(actions.displayAlert('You should be part of a team first.'))
      return
    }
    const action = 'team_invitation'
    const data = {
      title: 'Team Invitation',
      message: `HEY, ${this.props.player.name}, I WANT TO INVITE YOU TO JOIN MY TEAM! ` + this.state.message,
      author: this.props.me,
      subscribers: [this.props.player.id]
    }

    this.props.dispatch(actions.socketSendMessage({ action, data: [data] }))
    this.props.dispatch(actions.switchInvitePlayer({}))
    this.props.dispatch(actions.displayAlert('Invitation sent.'))
  }

  dismissPopup () {
    this.props.dispatch(actions.switchInvitePlayer({}))
  }

  render () {
    return (
      <div className='dashboard-hey'>
        <div className='hey-popup' style={{ background: 'white' }}>
          <div className='hey-popup-header'>
            <div className='header-text'>INVITE TO TEAM</div>
            <img alt='' src='/imgs/close.png' onClick={this.dismissPopup} />
          </div>
          <div className='hey-popup-content'>
            <h1>HEY, <span className='red'>{this.props.player && this.props.player.name}</span>, I WANT TO INVITE YOU TO JOIN MY TEAM!</h1>
          </div>
          <div className='chat-message'>
            <form name='chat-message'>
              <textarea
                placeholder='Add a custom message to the player...'
                className='chat-message'
                value={this.state.message}
                onChange={ev => this.setState({ message: ev.target.value })} />
            </form>
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
    player: state.participants.find(p => p.id === state.popup.payload.id),
    me: state.auth.user.participantId,
    teamId: state.auth.user.teamId
  }
}

export default connect(mapStateToProps)(InvitePlayer)
