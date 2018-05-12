import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatName, formatDate } from '../../helpers'
import * as actions from '../../actions'

class Notifications extends Component {
  constructor (props) {
    super(props)

    this.deleteNotif = this.deleteNotif.bind(this)
  }

  deleteNotif (id) {
    const action = 'notif_unsubscribe'
    const data = { id, me: this.props.me }
    this.props.dispatch(actions.socketSendMessage({ action, data }))
  }

  componentDidMount () {
    this.scrollToBottom()
  }

  componentDidUpdate (prevProps, prevState) {
    this.scrollToBottom()
  }

  scrollToBottom () {
    const { scroll } = this.refs
    scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight
  }

  render () {
    const notSeen = {
      paddingLeft: '0',
      borderLeft: '3px solid #c53622'
    }

    const { notifications, players, me } = this.props

    return (
      <div className='main-col-cell'>
        <div className='dashboard-notifications'>
          <div className='headline'>
            <h4>Notifications</h4>
            <div className='notifications-header'>
              <div className='cell-name'>Name</div>
              <div className='cell-subject'>Subject</div>
              <div className='cell-time'>Time</div>
            </div>
          </div>

          <div className='y-scroll-wrap'>
            <div className='y-scroll' ref='scroll'>
              <div className='dashboard-notifications-list'>

                {notifications && notifications.map(notif => {
                  const player = players.find(p => p.id === notif.author)
                  return (
                    <div className='dashboard-notifications-row' key={notif._id}>
                      <div className='cell-name user' style={notif.seen.indexOf(me) === -1 ? notSeen : {}}>
                        <div
                          style={{ background: `url(${player.avatar || '/imgs/default-avatar.png'}) no-repeat center /cover` }}
                          className='user-photo' />
                        <div className='user-info'>
                          <span className='user-name'>{formatName(player.name)}</span>
                        </div>
                      </div>
                      <div
                        onClick={() => this.props.dispatch(actions.switchNotification(notif))}
                        className='cell-subject cursor-pointer'>
                        <div className='subject'>{notif.title}</div>
                        <div className='excerpt'>{notif.message.slice(0, 30)}</div>
                      </div>
                      <div className='cell-time'>{formatDate(notif.updatedAt)}</div>
                      <div className='cell-icons'>
                        {/* <div><img alt='' src='imgs/icon-reply.png' /></div> */}
                        <div
                          className='cursor-pointer'
                          onClick={() => this.deleteNotif(notif._id)}><img alt='' src='imgs/icon-delete.png' /></div>
                      </div>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.socket.notifications,
    players: state.participants,
    me: state.auth.user.participantId
  }
}

export default connect(mapStateToProps)(Notifications)
