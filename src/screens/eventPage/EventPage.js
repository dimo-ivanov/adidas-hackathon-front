import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

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
      <div style={{width: '100%', height: '100%'}}>
      <img alt='' class="shutterstock3001035981" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeshutterstock3001035981.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeshutterstock3001035981.png"/>
      <img alt='' class="real-madrid-chelse" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modereal madrid  chelse.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modereal madrid  chelse.png"/>
      <img alt='' class="l-ive" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modelive.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modelive.png"/>
      <img alt='' class="icons8exit48" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeicons8exit48.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeicons8exit48.png"/>
      <img alt='' class="e-xit" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeexit.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modeexit.png"/>
      <img alt='' class="rectangle3" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 3.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 3.png"/>
      <img alt='' class="rectangle2" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 2.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 2.png"/>
      <img alt='' class="try-to-guess" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modetry to guess.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event modetry to guess.png"/>
      <img alt='' class="a5244" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event mode5244.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event mode5244.png"/>
      <img alt='' class="rectangle7" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 7.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 7.png"/>
      <img alr='' class="rectangle4" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 4.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af7f57ebc4d3c000d6cc5a5/img/event moderectangle 4.png"/>
        {this.props.minievents.length === 0 && <div></div>}
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
