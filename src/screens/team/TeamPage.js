import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamFeed from './TeamFeed'

class MyTeam extends Component {
  render () {
    const id = this.props.match.params.id
    const team = this.props.teams.find(t => t.id === id)
    return (
      <TeamFeed {...team} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.team.teams
  }
}

export default connect(mapStateToProps)(MyTeam)
