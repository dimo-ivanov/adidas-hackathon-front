import React from 'react'
import io from 'socket.io-client'

class Chat extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      message: '',
      messages: []
    }

    this.socket = io('localhost:8080')
    this.socket.on('RECIEVE_MESSAGE', data => {
      this.addMessage(data)
    })

    this.sendMessage = this.sendMessage.bind(this)
    this.addMessage = this.addMessage.bind(this)
  }

  sendMessage (ev) {
    ev.preventDefault()

    this.socket.emit('SEND_MESSAGE', {
      author: this.state.username,
      message: this.state.message
    })

    this.setState({ message: '' })
  }

  addMessage (data) {
    this.setState({ messages: [...this.state.messages, data] })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-title'>Global Chat</div>
                <hr />
                <div className='messages'>
                  {this.state.messages.map((message, index) => {
                    return (
                      <div key={index}>{message.author}: {message.message}</div>
                    )
                  })}
                </div>
              </div>
              <div className='card-footer'>
                <input
                  type='text'
                  placeholder='Username'
                  className='form-control'
                  value={this.state.username}
                  onChange={ev => this.setState({ username: ev.target.value })} />
                <br />
                <input
                  type='text'
                  placeholder='Message'
                  className='form-control'
                  value={this.state.message}
                  onChange={ev => this.setState({ message: ev.target.value })} />
                <br />
                <button
                  className='btn btn-primary form-control'
                  onClick={this.sendMessage} >Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat
