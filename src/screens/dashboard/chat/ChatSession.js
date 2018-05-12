import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import FormData from 'form-data'
import * as actions from '../../../actions'
import { Headers, formatName, formatDate, getOriginalFileName } from '../../../helpers'
import { apiUrl } from '../../../config/settings'
import InputTrigger from 'react-input-trigger'
import Suggestor from './Suggestor'
import reactStringReplace from 'react-string-replace'
import Linkify from 'react-linkify'
import './styles.css'

class ChatSession extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: '',
      accept: '',
      dropzoneActive: false,
      suggestor: {
        top: '0px',
        left: '0px'
      },
      displaySuggestions: false,
      mentions: [],
      progress: 0,
      displayProgress: false
    }

    this.sendMessage = this.sendMessage.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
  }

  handleFileUpload (files) {
    this.setState({ dropzoneActive: false })
    files.forEach(file => {
      if (file.size > 5 * 1024 * 1024) {
        this.props.dispatch(actions.displayAlert('Max file size: 5mb'))
        return
      }

      let data = new FormData()
      data.append('file', file)
      data.append('from', this.props.me)
      data.append('session', this.props.session._id)

      const options = {
        headers: Headers.getWithAuth(),
        onUploadProgress: (progressEvent) => {
          let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          this.setState({ progress: percentCompleted, displayProgress: true })
        }
      }

      axios
        .post(`${apiUrl}/files/upload`, data, options)
        .then(res => {
          if (res.data.success) {
            this.setState({ progress: 0, displayProgress: false })
          }
        })
    })
  }

  onDragEnter () {
    this.setState({
      dropzoneActive: true
    })
  }

  onDragLeave () {
    this.setState({
      dropzoneActive: false
    })
  }

  sendMessage (ev) {
    if (ev) ev.preventDefault()
    if (this.state.message !== '') {
      const action = 'new_message'
      const data = {
        session: this.props.session._id,
        from: this.props.me,
        to: this.props.session.participants.filter(p => p !== this.props.me),
        text: this.state.message,
        mentions: this.state.mentions
      }

      this.props.dispatch(actions.socketSendMessage({ action, data }))
      this.setState({ ...this.state, message: '', mentions: [] })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    this.scrollToBottom()
  }

  scrollToBottom () {
    const { scroll } = this.refs
    scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight
  }

  checkButtonsArea (event) {
    if (event.which === 13 && !event.shiftKey && !this.state.displaySuggestions) {
      event.preventDefault()
      this.sendMessage()
    }
  }

  handleAreaChange (event) {
    this.setState({ message: event.target.value })
  }

  renderMessage (msg) {
    // console.log("MESSAGE", msg)
    let mentionRegex = RegExp('@[a-z]+', 'gmi')
    let matches = msg.match(mentionRegex)
    let messageParts = msg.split(mentionRegex)
    if (!matches) {
      return msg
    } else {
      return (
        <div>
          {messageParts.map((p, index) => {
            return (
              <span key={index}>
                {p}
                {matches[index] && (
                  <span className='red'>{matches[index]}</span>
                )}
              </span>
            )
          })}
        </div>
      )
    }
  }

  render () {
    return (
      <Dropzone
        disableClick
        style={{ position: 'realative' }}
        accept={this.state.accept}
        onDrop={this.handleFileUpload}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}>
        {this.state.dropzoneActive && <div className='chat-dropzone'>Drop files...</div>}
        <div className='y-scroll-wrap' style={{ height: '100%' }}>
          <div className='y-scroll' ref={'scroll'}>
            <div className='chat-tabs-content'>
              <div className='chat-general-tab'>
                {this.props.session.msg && this.props.session.msg.map(msg => {
                  const sender = this.props.players.find(p => p.id === msg.from)
                  return (
                    <div key={msg._id} className={`row ${msg.text.includes(this.props.handle) && 'mentioned'}`}>
                      <div className='cell-photo'>
                        <div className='user-photo'
                          style={{ background: `url(${sender.avatar || '/imgs/default-avatar.png'}) no-repeat center /cover` }} />
                      </div>
                      <div className='cell-name' style={{ width: '100%' }}>
                        <div className='user-name'>
                          {formatName(sender.name)} <Link
                            className='color-inherit'
                            to={`/player/${sender.id}`}>
                            {sender.handle}
                          </Link>
                        </div>
                        <div className='excerpt'>
                          {!msg.isFile &&
                            <Linkify properties={{ target: '_blank', style: { color: '#c53622' } }}>
                              {reactStringReplace(msg.text, this.props.handle, (match, i) => (
                                <span className='red' key={i}>{match}</span>
                              ))}
                            </Linkify>
                          }
                          {msg.isFile && (
                            <div className='file-msg cursor-pointer'>
                              <a download={getOriginalFileName(msg.text)} href={msg.text} target='_blank' className='file-msg'>
                                <img alt='file' src='/imgs/Asset16.png' className='file-img' />
                                <div className='red'>{getOriginalFileName(msg.text).slice(-40)}</div>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className='cell-date'>
                        {formatDate(msg.createdAt)}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='chat-message'>
          <div>
            <form name='chat-message' onSubmit={this.sendMessage}>
              {this.state.displayProgress &&
                <div className='progress-bar' style={{ width: `${this.state.progress}%` }}>{this.state.progress}%</div>}
              <Suggestor
                textValue={this.state.message}
                searchText={this.state.suggetionText}
                show={this.state.displaySuggestions}
                cursor={this.state.suggestor}
                onSuggetionSelect={(text, suggentionDetails) => {
                  let newMentions = this.state.mentions.slice(0)
                  newMentions.push(suggentionDetails.participantId)
                  this.setState({ message: text + ' ', displaySuggestions: false, mentions: newMentions })
                  this.endHandler()
                }}
              >
                <InputTrigger
                  trigger={{
                    keyCode: 50,
                    shiftKey: true
                  }}
                  onStart={(obj) => { this.setState({ displaySuggestions: true, suggestor: obj.cursor, suggetionText: '' }) }}
                  onCancel={(obj) => { this.setState({ displaySuggestions: false, suggetionText: '' }) }}
                  onType={(obj) => { this.setState({ suggetionText: obj.text }) }}
                  endTrigger={(endHandler) => { this.endHandler = endHandler }}
                >
                  <textarea
                    placeholder='Start typing your message or drop file'
                    className='chat-message'
                    value={this.state.message}
                    onKeyDown={this.checkButtonsArea.bind(this)}
                    onChange={this.handleAreaChange.bind(this)} />
                </InputTrigger>
                <div className='bttn' style={{ background: 'none' }}>
                  <button
                    className='chat-message-send'
                    onClick={this.sendMessage}><img alt='' src='/imgs/icon-chat-send.png' /></button>
                </div>
              </Suggestor>
            </form>
          </div>
        </div>
      </Dropzone>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    me: state.auth.user.participantId,
    handle: state.auth.user.handle,
    players: state.participants
  }
}

export default connect(mapStateToProps)(ChatSession)
