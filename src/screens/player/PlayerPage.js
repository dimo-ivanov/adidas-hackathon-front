import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerFeed from './PlayerFeed'

class PlayerPage extends Component {
  render () {
    const id = this.props.match.params.id
    const player = this.props.participants.find(t => t.id === id)

    return (
      <PlayerFeed {...player} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    participants: state.participants
  }
}

export default connect(mapStateToProps)(PlayerPage)
