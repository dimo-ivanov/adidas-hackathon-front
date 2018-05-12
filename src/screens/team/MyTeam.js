import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import TeamFeed from './TeamFeed'

class MyTeam extends Component {
  componentWillMount () {
    JSON.stringify(this.props.myTeam) === '{}' && this.props.dispatch(push('/myteam/register'))
  }

  render () {
    return (
      <TeamFeed {...this.props.myTeam} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myTeam: state.team.myTeam
  }
}

export default connect(mapStateToProps)(MyTeam)
