import React, { Component } from 'react'
import './styles.css'

class AlertTemplate extends Component {
  render () {
    const { message, close } = this.props

    return (
      <div className='alert-template'>
        {/* {options.type === 'info' && '!'}
        {options.type === 'success' && ':)'}
        {options.type === 'error' && ':('} */}
        {message}
        <button className='alert-bttn' onClick={close}>X</button>
      </div>
    )
  }
}

export default AlertTemplate
