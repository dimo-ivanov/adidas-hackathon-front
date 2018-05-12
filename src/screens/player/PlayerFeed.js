import React from 'react'
import Chat from '../dashboard/chat/Chat'
import { formatName } from '../../helpers'
import { connect } from 'react-redux'
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
            <img alt='' src={props.team ? props.teams.find(t => t.id === props.team).cover : '/imgs/header.png'} width='100%' height='auto' />
          </div>
          <div className='top-middle-cell'>
            <div className='circle-container'>
              <div className='circle'
                style={{ background: `url(${props.avatar || '/imgs/default-avatar.jpg'}) no-repeat center /cover` }} />
            </div>
            <div className='header-container'>
              <h1> {props.name && formatName(props.name)}</h1>
              <p className='red'> {props.handle} </p>
            </div>
            <div className='message-container'>
              {(!props.team && props.myTeam) && (
                <div className='cell-team'>
                  <button
                    onClick={() => props.dispatch(actions.switchInvitePlayer({ id: props.id }))}
                    className='button button-sm'>Invite to your team</button>
                </div>
              )}
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
                <h4 className='user-details-header'>ABOUT ME:</h4>
                <div className='idea-p'>
                  {props.share_with_us}
                </div>
              </div>
              <div className='players'>
                <h4 className='user-details-header'>SKILLS:</h4>
                <div className='players-list'>
                  <div className='players-list-name'>{props.my_skills}</div>
                </div>

                {(props.social_accounts && props.social_accounts.length > 0) &&
                <h4 className='looking-head'>LINKS:</h4>}
                <div>
                  {props.social_accounts && props.social_accounts.map((link, index) => (
                    <a href={link} key={index}>
                      <img
                        alt=''
                        src={getIcon(link)}
                        width='width'
                        height='auto'
                        style={{ marginRight: 5 }} />
                    </a>
                  ))}
                </div>
              </div>
              <div className='links'>
                <h4 className='user-details-header'>TOPICS OF INTEREST:</h4>
                {props.interests && props.interests.map((topic, index) => (
                  <div className='players-list'>
                    <div className='players-list-name'>{topic}</div>
                  </div>
                ))}
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
    myTeam: JSON.stringify(state.team.myTeam) !== '{}',
    teams: state.team.teams
  }
}

export default connect(mapStateToProps)(TeamFeed)
