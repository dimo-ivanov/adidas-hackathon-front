import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

class RegisterTeam extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }

    this.submitForm = this.submitForm.bind(this)
    this.dismissPopup = this.dismissPopup.bind(this)
  }

  submitForm (ev) {
    if (this.props.me.teamId) {
      this.props.dispatch(actions.displayAlert('You are part of a team already.'))
      return
    }

    const action = 'team_apply'
    const data = {
      title: 'Team Application',
      message: `HEY, ${this.props.team.name}, I WANT TO JOIN YOU AS A ${this.props.position}! ` + this.state.message,
      author: this.props.me.participantId,
      subscribers: this.props.team.participants
    }

    this.props.dispatch(actions.socketSendMessage({ action, data: [data] }))
    this.props.dispatch(actions.switchApplyTeamPopup({}))
    this.props.dispatch(actions.displayAlert('Team Application sent.'))
  }

  dismissPopup () {
    this.props.dispatch(actions.switchApplyTeamPopup({}))
  }

  render () {
    return (
      <div className='dashboard-hey'>
        <div className='hey-popup' style={{ background: 'white' }}>
          <div className='hey-popup-header'>
            <div className='header-text'>APPLY TO TEAM</div>
            <img alt='' src='/imgs/close.png' onClick={this.dismissPopup} />
          </div>
          <div className='hey-popup-content'>
            <h1>HEY, {this.props.team.name}, I WANT TO JOIN YOU AS A <span className='red'>{this.props.position}</span>!</h1>
          </div>
          <div className='chat-message'>
            <form name='chat-message'>
              <textarea
                placeholder='Add a custom message to the team...'
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
    show: state.popup.showApplyTeam,
    team: state.popup.payload.team,
    position: state.popup.payload.position || '',
    me: state.auth.user
  }
}

export default connect(mapStateToProps)(RegisterTeam)
