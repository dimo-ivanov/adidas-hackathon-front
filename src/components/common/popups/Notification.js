import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../../actions'
import { formatName, formatDate } from '../../../helpers'
import Linkify from 'react-linkify'
import './styles.css'

class Notification extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }

    this.dismissPopup = this.dismissPopup.bind(this)
    this.joinTeam = this.joinTeam.bind(this)
    this.deleteNotif = this.deleteNotif.bind(this)
  }

  componentDidMount () {
    const { notif, me } = this.props

    if (notif.seen.indexOf(me) === -1) {
      const action = 'mark_notif_seen'
      const data = { id: notif._id, me }

      this.props.dispatch(actions.socketSendMessage({ action, data }))
    }
  }

  submitForm (ev) {
    const action = 'team_invitation'
    const data = {
      title: 'Team Invitation',
      message: this.state.message,
      author: this.props.auth.user.participantId,
      subscribers: [this.props.player._id]
    }

    this.props.dispatch(actions.socketSendMessage({ action, data }))
  }

  dismissPopup () {
    this.props.dispatch(actions.switchNotification({}))
  }

  joinTeam () {
    const notifId = this.props.notif._id
    this.props.dispatch(actions.joinTeam(notifId))
  }

  deleteNotif (id) {
    const action = 'notif_unsubscribe'
    const data = { id, me: this.props.me }
    this.props.dispatch(actions.socketSendMessage({ action, data }))
    this.dismissPopup()
  }

  render () {
    const { notif, me, players, teams } = this.props
    const author = players.find(p => p.id === notif.author)
    const team = teams.find(t => t.id === author.team)
    const subscribers = players.filter(p => notif.subscribers.indexOf(p.id) > -1)

    return (
      <div className='dashboard-popup-notif'>
        <div className='hey-popup-header'>
          <h4 className='header-text'>NOTIFICATIONS</h4>
          <button
            onClick={this.dismissPopup}
            className='black-cross'>
            <img alt='' src='/imgs/close.png' />
          </button>
        </div>
        <div className='line'>
          <div className='left'>
            <div> Subject:</div>
          </div>
          <div className='center'>
            <div>{notif.title}</div>
          </div>
          <div className='right'>
            {/* <img alt='' src='/imgs/single-reply.png' width='20px' height='15px' className='arrow' />
            <img alt='' src='/imgs/double-arrow.png' width='25px' height='15px' className='arrow' /> */}
            <img
              className='cursor-pointer'
              onClick={() => this.deleteNotif(notif._id)}
              alt='' src='/imgs/bin.png' width='20px' height='15px/' />
          </div>
        </div>
        <div className='silver-line' />
        <div className='line'>
          <div className='left'>
            <div> From:</div>
            <div> To:</div>
          </div>
          <div className='center'>
            <div>{formatName(author.name)} <span className='red'>
              <Link className='color-inherit' to={`/player/${author.id}`} target='_blank'>{author.handle}</Link>
            </span>
            </div>
            <div>me{subscribers && subscribers.filter(s => s.id !== me).map(subscriber => (
              <span key={subscriber.id}>, <span className='red'>
                <Link className='color-inherit' to={`/player/${subscriber.id}`} target='_blank'>{subscriber.handle}</Link>
              </span></span>
            ))}
            </div>
          </div>
          <div className='right'>
            <div className='cell-date'>
              {formatDate(notif.updatedAt)}
            </div>
          </div>
        </div>
        <div className='silver-line' />
        <div className='pop-message-container '>
          <div className='dashboard-players2'>
            <div className='y-scroll-wrap2'>
              <div className='y-scroll2'>
                <div className='dashboard-players-list2'>
                  <div className='dashboard-players-row2'>
                    {notif.title === 'Team Invitation' && (
                      <div>Team: {team.name}
                        <span className='red'>
                          <Link
                            className='color-inherit'
                            to={`/team/${team.id}`}
                            target='_blank'> {team.handle}
                          </Link>
                        </span>
                      </div>
                    )}
                    <Linkify properties={{ target: '_blank', style: { color: '#c53622' } }}>
                      {notif.message}
                    </Linkify>
                  </div>
                  {notif.title === 'Team Invitation' && (
                    <div className='dashboard-players-row2'>
                      <button
                        onClick={this.joinTeam}
                        className='button'>join team</button>
                    </div>
                  )}
                  {notif.title === 'Team Application' && (
                    <div className='dashboard-players-row2'>
                      <button
                        onClick={this.joinTeam}
                        className='button'>approve</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='chat-message'>
          <form name='chat-message'>
            <textarea
              placeholder='Quick reply here...'
              className='chat-message'
              value={this.state.message}
              onChange={ev => this.setState({ message: ev.target.value })} />
          </form>
        </div>
        <div className='hey-popup-button-cont'>
          <button
            onClick={this.submitForm}
            className='button-bt '>send<img alt='' src='/imgs/white-send.png' width='15px' height='15px' className='white-send' /></button>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notif: state.popup.payload,
    me: state.auth.user.participantId,
    players: state.participants,
    teams: state.team.teams
  }
}

export default connect(mapStateToProps)(Notification)
