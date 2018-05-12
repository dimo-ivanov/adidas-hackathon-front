import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Auth } from '../../helpers'

class Banner extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hours: '',
      minutes: ''
    }
  }

  componentDidMount () {
    const countDownDate = new Date('May 12, 2018 09:00:00').getTime()

    const timerFunc = () => {
      let now = new Date().getTime()
      let distance = countDownDate - now

      let days = Math.floor(distance / (1000 * 60 * 60 * 24))

      let hours = days * 24 + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      minutes = minutes < 10 ? '0' + minutes : minutes

      this.setState({ hours: hours, minutes: minutes })

      if (distance < 0 && this.timer) {
        clearInterval(this.timer)
        this.setState({ hours: '00', minutes: '00' })
      }
    }

    timerFunc()

    this.timer = setInterval(timerFunc, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className='main-col-cell'>
        <div className='dashboard-hellow'>
          <p className='heretocreate'>#HERETOCREATE</p>
          <h1>Hello,<br />{Auth.getUser() && Auth.getUser().location.split(' ')[0]}</h1>

          <div className='counters'>
            <div>
              <div className='number'>{this.props.players}</div>
              <h4>Players</h4>
            </div>
            <div>
              <div className='number'>{this.props.teams}</div>
              <h4>Teams</h4>
            </div>
            <div>
              <div className='number'>{this.state.hours}:{this.state.minutes}</div>
              <h4>Hours left</h4>
            </div>
          </div>

          <div>
            <button onClick={() => {
              this.props.dispatch({
                type: 'popup/SWITCH_EMAIL_INVITE'
              })
            }} className='button'>INVITE PLAYERS</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.auth.user.location,
    players: state.participants.length,
    teams: state.team.teams.length
  }
}

export default connect(mapStateToProps)(Banner)
