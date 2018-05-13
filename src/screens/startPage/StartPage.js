import React, { Component } from 'react'
import './style.css'

class StartPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      eventCode: '',
      page: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    this.state.eventCode !== '' && this.setState({ page: 2 })
  }

  renderPage1 () {
    return (
      <div className='page1'>
        <div style={{ width: 1189, height: '100%', position: 'relative', margin: 'auto' }}>
          <img alt='' className='backgroundfootballhd8' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1backgroundfootballhd8.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1backgroundfootballhd8.png' />
          <img alt='' className='rectangle4' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 4.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 4.png' />
          <input
            type='submit'
            onClick={this.handleSubmit}
            alt=''
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
      <div className='page1'>
      <div style={{ width: 1189, height: "100%", position: 'relative', margin: 'auto' }}>
      <img alt='' className='backgroundfootballhd8' src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1backgroundfootballhd8.png' anima-src='https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1backgroundfootballhd8.png' />
        <img alt='' class="oval2" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2oval 2.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2oval 2.png"/>
        <img alt='' class="now-enter-your-guest" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2now enter your guest.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2now enter your guest.png"/>
        <img alt='' class="rectangle2" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 2.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1rectangle 2.png"/>
        <img alt='' class="group2" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2group 2.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2group 2.png"/>
        <img alt='' class="footballspace" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1footballspace.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af704e783b433000c08d4cd/img/page 1footballspace.png"/>
        <img alt='' class="bitmap" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1bitmap.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af6e99c994d70000c325ad3/img/page 1bitmap.png"/>
        <img alt='' class="icons8home26" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2icons8home26.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2icons8home26.png"/>
        <img alt='' class="icons8contactsfilled50" src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2icons8contactsfilled50.png" anima-src="https://anima-uploads.s3.amazonaws.com/5af6e91783b433000c08d471/5af6e99b994d70000b8b9d26/5af737e6006ce3000b613e99/img/page 2icons8contactsfilled50.png"/>
        </div>
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

export default StartPage
