import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
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
      <div style={{ width: '100%', height: '100%' }}>
        <img alt='' className='shutterstock3001035981' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeshutterstock3001035981.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeshutterstock3001035981.png' />
        <img alt='' className='real-madrid-chelse' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modereal madrid  chelse.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modereal madrid  chelse.png' />
        <img alt='' className='l-ive' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modelive.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modelive.png' />
        <img alt='' className='icons8exit48' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeicons8exit48.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeicons8exit48.png' />
        <img alt='' className='e-xit' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeexit.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeexit.png' />
        <img alt='' className='rectangle3' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 3.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 3.png' />
        <img alt='' className='rectangle2' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 2.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 2.png' />
        <img alt='' className='try-to-guess' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modetry to guess.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modetry to guess.png' />
        <img alt='' className='a5244' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event mode5244.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event mode5244.png' />
        <img alt='' className='rectangle7' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 7.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 7.png' />
        <img alr='' className='rectangle4' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 4.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 4.png' />
        {this.props.minievents.length === 0 && <div>No upcomming events.</div>}
        {this.props.minievents.length === 0 && <div>No upcomming events.</div>}
        <div className='table'>
          {this.props.minievents.map(mini => (
            <div key={mini._id} className='line'>
              <div style={{ flex: '10' }}>{mini.text}</div><div style={{ flex: '2' }}>{mini.likes} / {mini.dislikes}</div><div style={{ flex: '1' }}>{moment(mini.start).format('MM:ss')}</div>
            </div>
          ))}
        </div>

        <button onClick={() => this.createMinievent(new Date(), 'Mexican wave')}>create event</button>
      </div>
      // <h1>PAGE 3</h1>
      //
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
