import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { formatName } from '../../helpers'
import * as actions from '../../actions'

class Players extends Component {
  constructor (props) {
    super(props)

    this.invitePlayer = this.invitePlayer.bind(this)
  }

  invitePlayer (id) {
    this.props.dispatch(actions.switchInvitePlayer({id}))
  }

  render () {
    return (
      <div className='main-col-cell'>
        <div className='dashboard-players'>
          <div className='headline'>
            <h4>Players</h4>
            <div className='players-header'>
              <div className='cell-name'>Name</div>
              <div className='cell-skills'>Skills</div>
              <div className='cell-team'>Team</div>
            </div>
          </div>
          <div className='y-scroll-wrap'>
            <div className='y-scroll'>
              <div className='dashboard-players-list'>
                {this.props.players && this.props.players.map(player => (
                  <div key={player.id} className='dashboard-players-row' >
                    <div className='cell-name cursor-pointer'
                      style={{ background: `url(${player.avatar || '/imgs/default-avatar.png'}) no-repeat center /cover` }}
                      onClick={() => this.props.dispatch(push(`/player/${player.id}`))} />
                    <div className='cell-subject cursor-pointer'
                      onClick={() => this.props.dispatch(push(`/player/${player.id}`))}>
                      {formatName(player.name)}
                    </div>
                    <div className='cell-skills cursor-pointer'
                      onClick={() => this.props.dispatch(push(`/player/${player.id}`))}>
                      {player.my_skills}
                    </div>
                    <div className='cell-team'>
                      {player.team
                        ? (this.props.teams && this.props.teams.find(t => t.id === player.team).name)
                        : (
                          <button
                            className='button button-sm'
                            onClick={() => this.invitePlayer(player.id)}>Invite</button>
                        )}
                    </div>
                  </div>
                ))}
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
    players: state.participants,
    teams: state.team.teams,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Players)
