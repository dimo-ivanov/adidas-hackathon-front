import React, { Component } from 'react'
import { connect } from 'react-redux'

class EventPage extends Component {
  createMinievent (startTime, text) {
    const data = {
      event: this.props.event._id,
      team: this.props.team,
      start: startTime,
      text: text
    }

    this.props.dispatch()
  }

  render () {
    return (
      <div>
        <h1>PAGE 3</h1>

        {this.props.minievents.length === 0 && <div>No upcomming events.</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    minievents: state.minievents,
    event: state.event,
    team: state.general.team
  }
}

export default connect(mapStateToProps)(EventPage)
