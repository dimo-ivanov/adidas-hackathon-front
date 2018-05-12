import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatSession from './ChatSession'

class Chat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeSession: {}
    }

    this.setActiveSession = this.setActiveSession.bind(this)
  }

  setActiveSession (id) {
    this.setState(
      {
        activeSession: this.props.sessions.find(s => s._id === id)
      }
    )
  }

  componentDidMount () {
    if (JSON.stringify(this.state.activeSession) === '{}') {
      const generalChat = this.props.sessions.find(session => session.type === 'general_chat')
      generalChat && this.setState({ activeSession: generalChat })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (JSON.stringify(this.state.activeSession) === '{}') {
      const generalChat = nextProps.sessions.find(session => session.type === 'general_chat')
      generalChat && this.setState({ activeSession: generalChat })
    } else {
      const activeSessionId = this.state.activeSession._id
      const sessionUpdated = nextProps.sessions.find(s => s._id === activeSessionId)
      this.setState({ activeSession: sessionUpdated })
    }
  }

  render () {
    const { sessions } = this.props
    const { activeSession } = this.state

    return (
      <div className='main-col'>
        <div style={{ maxHeight: '695px', paddingTop: '0' }}>
          <div className='main-col-cell' style={{ paddingLeft: '0' }}>

            <div className='dashboard-chat'>
              <div className='chat-tabs'>

                {sessions.length > 0 && (
                  <div
                    className={
                      `tab cursor-pointer ${activeSession === sessions.find(s => s.type === 'general_chat') && 'active'}`
                    }
                    onClick={
                      () => this.setActiveSession(sessions.find(s => s.type === 'general_chat')._id)
                    }><div>GENERAL CHAT</div>
                  </div>
                )}

                {(sessions.length > 1 && sessions.find(s => s.type === 'team_chat')) && (
                  <div
                    className={
                      `tab cursor-pointer ${activeSession === sessions.find(s => s.type === 'team_chat') && 'active'}`
                    }
                    onClick={
                      () => this.setActiveSession(sessions.find(s => s.type === 'team_chat')._id)
                    }><div>TEAM CHAT</div>
                  </div>
                )}

                {/* <div className='search'>
                  <form name='search'>
                    <input type='text' name='search-input' className='search-input' placeholder='Search...' />
                    <div className='bttn'><button className='search-submit'><img alt='' src='imgs/icon-search.png' /></button></div>
                  </form>
                </div> */}
              </div>

              <ChatSession session={this.state.activeSession} />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.socket.sessions,
    me: state.auth.user.participantId
  }
}

export default connect(mapStateToProps)(Chat)
