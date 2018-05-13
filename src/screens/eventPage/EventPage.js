import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { socketCreateEvent } from '../../actions'

class EventPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.createMinievent = this.createMinievent.bind(this)
  }

  createMinievent (startTime, text) {
    const action = 'createMinievent'
    const data = {
      event: this.props.event._id,
      team: this.props.team,
      start: startTime,
      text: text
    }

    this.props.dispatch(socketCreateEvent({ action, data }))
  }

  render () {
    return (
      <div>
        <h1>PAGE 3</h1>

        {this.props.minievents.length === 0 && <div>No upcomming events.</div>}
        {this.props.minievents.map(mini => (
          <div key={mini._id}>
            <div>{mini.text} in <span>{moment(mini.start).format('MM:ss')}</span></div><div>{mini.likes} / {mini.dislikes}</div>
          </div>
        ))}

        <button onClick={() => this.createMinievent(new Date(), 'Mexican wave')}>create event</button>
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
