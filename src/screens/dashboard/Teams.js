import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
// import * as actions from '../../actions'

class Teams extends Component {
  constructor (props) {
    super(props)

    this.goToRegisterTeamPage = this.goToRegisterTeamPage.bind(this)
    this.goToManageTeamPage = this.goToManageTeamPage.bind(this)
  }

  goToRegisterTeamPage () {
    this.props.dispatch(push('/myteam/register'))
  }

  goToManageTeamPage () {
    this.props.dispatch(push('/myteam/manage'))
  }

  render () {
    return (
      <div className='main-col-cell'>
        <div className='dashboard-teams'>
          <div className='headline'>
            <div className='row'>
              <div><h4>Teams</h4></div>
              <div>
                {JSON.stringify(this.props.myTeam) === '{}'
                  ? <button className='button button-sm' onClick={this.goToRegisterTeamPage}>+ REGISTER A TEAM</button>
                  : <button className='button button-sm' onClick={this.goToManageTeamPage}>MANAGE YOUR TEAM</button>}
              </div>
            </div>
            <div className='teams-header'>
              <div className='cell-name'>Name</div>
              <div className='cell-tags'>Tags</div>
              <div className='cell-looking-for'>Looking for</div>
            </div>
          </div>
          <div className='y-scroll-wrap'>
            <div className='y-scroll'>
              <div className='dashboard-teams-list'>
                {this.props.teams && this.props.teams.map(team => (
                  <div
                    key={team.id}
                    className='dashboard-teams-row cursor-pointer'
                    onClick={() => this.props.dispatch(push(`/team/${team.id}`))}>
                    <div className='cell-name'
                      style={{ background: `url(${team.avatar}) no-repeat center /cover` }} />
                    <div className='cell-subject'>
                      {team.name}
                    </div>
                    <div className='cell-tags'>
                      {team.technologies.map((tag, index) => (
                        <span key={index} className='tag'>{tag}</span>
                      ))}
                    </div>
                    {team.looking_for.length === 0 && team.complete ? (
                      <div className='cell-looking-for'>
                      Team full
                      </div>
                    ) : (
                      <div className='cell-looking-for red'>
                        {team.looking_for.join(', ')}
                      </div>
                    )}
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
    teams: state.team.teams,
    myTeam: state.team.myTeam,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Teams)
