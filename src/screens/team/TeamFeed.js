import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Chat from '../dashboard/chat/Chat'
import { formatName, Auth } from '../../helpers'
import * as actions from '../../actions'

const getIcon = (link) => {
  let icon = '/imgs/icon-www.png'
  link.includes('github') && (icon = '/imgs/icon-github.png')
  link.includes('linkedin') && (icon = '/imgs/icon-in.png')

  return icon
}

const TeamFeed = (props) => (
  <main>
    <div className='double-col'>
      <div>
        <div className='dashboard-teamfeed'>
          <div className='top-col-cell'>
            <img alt='' src={props.cover} width='100%' height='auto' />
          </div>
          <div className='top-middle-cell'>
            <div className='circle-container'>
              <div className='circle'
                style={{ background: `url(${props.avatar || '/imgs/default-avatar.jpg'}) no-repeat center /cover` }} />
            </div>
            <div className='header-container'>
              <h1> {props.name}:</h1>
              <h1 className='silver-header'> {props.project_name}</h1>
              {/* <p className='red'> {props.handle} </p> */}
            </div>
            <div className='message-container'>
              {(props.participants && props.participants.includes(Auth.getParticipant())) &&
                <div className='cell-team'>
                  <button
                    onClick={() => props.dispatch(push('/myteam/manage'))}
                    className='button button-sm'>Manage your team</button>
                </div>
              }
              {/* <div className='message-envelope'>
                <div className='envelope'>
                  <img alt='' src='/imgs/icon-mail.png' />
                </div>
                <div className='message'>Send message</div>
              </div> */}
            </div>
          </div>
          <div className='main-col-team'>
            <div className='user-details'>
              <div className='idea'>
                <h4 className='user-details-header'>OUR IDEA:</h4>
                <div className='idea-p'>
                  {props.idea}
                </div>
              </div>
              <div className='players'>
                <h4 className='user-details-header'>PLAYERS</h4>
                {props.participants && props.participants.map(id => {
                  const player = props.players.find(p => p.id === id)
                  if (player) {
                    return (
                      <div className='players-list' key={id}>
                        <div className='players-list-name'>{formatName(player.name)}</div>
                        <div className='players-list-position'>{props.roles[id]}</div>
                      </div>
                    )
                  }
                  return <div key={id} />
                })}
                {!props.complete && <h4 className='looking-head'>LOOKING FOR:</h4>}
                {!props.complete && (

                  <div className='players-list'>
                    {props.looking_for && props.looking_for.map((position, index) => (
                      <div
                        className='look-for cursor-pointer'
                        key={index}
                        onClick={() => props.dispatch(
                          actions.switchApplyTeamPopup({ position, team: props })
                        )}>{position}</div>
                    ))}
                  </div>
                )}
                {!props.complete && <div className='click'>Click on role to apply.</div>}

              </div>
              <div className='links'>
                <h4 className='user-details-header'>LINKS:</h4>
                <div>
                  {props.links && props.links.map((link, index) => (
                    <a href={link.url.includes('://') ? link.url : `//${link.url}`} key={index} target='_blank'>
                      <img
                        alt=''
                        src={getIcon(link.url)}
                        width='width'
                        height='auto'
                        style={{ marginRight: 5 }} />
                    </a>
                  ))}
                </div>
                {/* <h4 className='user-details-header' style={{ paddingTop: 40 }}>PARTNERS:</h4>
                <div>
                  <img alt='' src='/imgs/ibm.png' width='auto' height='auto' />
                </div>
                <div className='test'>
                  <img alt='' src='/imgs/open.png' width='auto' height='auto' />
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className='main-col-cell'>
            <div className='team-feed'>
              <h4>PLAYER FEED:</h4>
            </div>
          </div>
          <div className='main-col-cell'>
            <img alt='' src='/imgs/double-pic.png' width='100%' height='220px' />
            <img alt='' src='/imgs/laptop.png' width='40%%' height='220px' />
          </div> */}
        </div>
      </div>
    </div>
    <Chat />
  </main>
)

const mapStateToProps = (state) => {
  return {
    players: state.participants
  }
}

export default connect(mapStateToProps)(TeamFeed)
