import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import { getEvent, socketConnect } from '../../actions'

class StartPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      eventCode: '5432',
      team: 'homeTeam',
      page: 1
    }

    this.handleContunue = this.handleContunue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleContunue () {
    this.state.eventCode !== '' && this.props.dispatch(getEvent(this.state.eventCode))
  }

  handleSubmit (ev) {
    ev.preventDefault()
    const data = {
      event: this.props.event._id,
      team: this.state.team
    }
    this.props.dispatch(socketConnect(data))
  }

  componentWillReceiveProps (nextProps) {
    JSON.stringify(nextProps.event) !== '{}' && this.setState({ page: 2 })
  }

  renderPage1 () {
    return (
      <div className='page1'>
        <div className='err-msg'>{this.props.error.message}</div>
        <div style={{ width: 1189, height: '100%', position: 'relative', margin: 'auto' }}>
          <img alt='' className='backgroundfootballhd8' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1backgroundfootballhd8.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1backgroundfootballhd8.png' />
          <img alt='' className='rectangle4' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 4.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 4.png' />
          <input
            type='submit'
            onClick={this.handleContunue}
            value='continue'
            className='group2'
          />
          <img alt='' className='rectangle3' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 3.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 3.png' />
          <img alt='' className='footballspace' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1footballspace.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1footballspace.png' />
          <input
            type='text'
            value={this.state.eventCode}
            onChange={ev => this.setState({ eventCode: ev.target.value })}
            alt=''
            className='rectangle2'
          />
          <img alt='' className='type-the-of-the-te' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1type the  of the te.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1type the  of the te.png' id='matchcode' />
          <img alt='' className='check-your-location' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1check your location.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1check your location.png' />
          <img alt='' className='bitmap' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1bitmap.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1bitmap.png' />
          <img alt='' className='rectangle6' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 6.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 6.png' />
        </div>
      </div>
    )
  }

  renderPage2 () {
    return (
      <div className='page2'>
        <img alt='' className='backgroundfootballhd8 tegav-img' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1backgroundfootballhd8.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1backgroundfootballhd8.png' />
        <img alt='' className='rectangle4' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 4.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 4.png' />
        <img alt='' className='footballspace' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1footballspace.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1footballspace.png' />
        <img alt='' className='bitmap' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1bitmap.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1bitmap.png' />
        <form onSubmit={this.handleSubmit} name='form'>
          <select className='chooseTeam' onChange={ev => this.setState({ team: ev.target.value })}>
            <option value='homeTeam'>{this.props.event.homeTeam}</option>
            <option value='guestTeam'>{this.props.event.guestTeam}</option>
          </select>
          <input className='joinButton' type='submit' value='Join Team' />
        </form>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.state.page === 1 && this.renderPage1()}
        {this.state.page === 2 && this.renderPage2()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.event,
    error: state.error
  }
}

export default connect(mapStateToProps)(StartPage)
