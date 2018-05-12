import React, { Component } from 'react'
import { connect } from 'react-redux'
import LinkForm from './LinkForm'
import Chat from '../dashboard/chat/Chat'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import FormData from 'form-data'
import * as actions from '../../actions'
import { Headers, formatName, formatDate } from '../../helpers'
import { apiUrl } from '../../config/settings'

class TeamForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showForm: false
    }

    this.handleFileUpload = this.handleFileUpload.bind(this)
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

  render () {
    const props = this.props

    return (
      <main>
        <div className='double-col'>
          <div>
            <div className='dashboard-myteam'>
              <div className='top-col-cell'>
                <img alt='' src={props.cover} width='100%' height='auto' className='top-img' />
                <img alt='' src='/imgs/pencil.png' width='25px' height='25px' className='picture-pencil' />
              </div>
              <div className='top-middle-cell'>
                <div className='circle-container'>
                  <div className='circle'
                    style={{ background: `url(${props.avatar || '/imgs/default-avatar.jpg'}) no-repeat center /cover` }}>
                    <img alt='' src='/imgs/pencil.png' width='25px' height='25px' className='inner-pencil' />
                  </div>
                </div>
                <div className='header-container' />
                <div className='message-container' />
              </div>
              <div className='content'>
                <div className='contetnt-box'>
                  <div className='team-handle'>
                    <div>
                      <h4 className='user-details-header'>TEAM NAME (REQUIRED):</h4>
                      <div className='chat-message'>
                        <form name='chat-message'>
                          <textarea
                            name='name'
                            placeholder='Team name'
                            className='chat-message'
                            value={props.name}
                            onChange={props.onChange} />
                        </form>
                      </div>
                    </div>
                    <div>
                      <h4 className='user-details-header'>PROJECT NAME (REQUIRED):</h4>
                      <div className='chat-message'>
                        <form name='chat-message'>
                          <textarea
                            name='project_name'
                            placeholder='Project name'
                            className='chat-message'
                            value={props.project_name}
                            onChange={props.onChange} />
                        </form>
                      </div>
                    </div>
                    <div className='user-details'>
                      <h4 className='user-details-header'>OUR IDEA (REQUIRED):</h4>
                      <div className='chat-message'>
                        <form name='chat-message'>
                          <textarea
                            name='idea'
                            placeholder='Idea'
                            className='chat-message'
                            value={props.idea}
                            onChange={props.onChange} />
                        </form>
                      </div>
                    </div>
                    <div className='line-myteam' />
                    <div>
                      <h4 className='user-details-header'>PLAYERS</h4>
                      {props.participants && props.participants.length > 0 && (
                        <div className='chat-small-message box-name'>
                          <div className='name-role'>Name</div>
                          <div className='name-role'>Role</div>
                          <div className='icon-container' />
                        </div>
                      )}
                      {props.participants && props.participants.map(id => {
                        const player = props.players.find(p => p.id === id)
                        if (player) {
                          return (
                            <div className='chat-small-message' key={id}>
                              <textarea className='placeholder' value={formatName(player.name)} disabled />
                              <textarea
                                className='placeholder'
                                value={props.roles[id]}
                                onChange={ev => props.roleChange(id, ev)} />
                              <div className='icon-container'>
                                {(props.removeParticipant && id !== props.owner) && (
                                  <img
                                    onClick={() => props.removeParticipant(id)}
                                    alt=''
                                    src='/imgs/Asset14.png'
                                    width='20px'
                                    height='20px/' />
                                )}
                              </div>
                            </div>
                          )
                        }
                        return <div key={id} />
                      }
                      )}
                    </div>
                    {/* <div className='add-myteam'>
                <div className='add-row'>
                  <div className='icon-container'>
                    <img alt='' src='/imgs/Asset15.png' width='25px' height='25px/' />
                  </div>
                  <div className='links-content'>
                    <div style={{ color: '#616363' }}>Add player</div>
                  </div>
                </div>
                <div className='icon-container' />
              </div> */}
                    <div>
                      <h4 className='user-details-header'>LOOKING FOR:</h4>
                    </div>
                    {props.looking_for && props.looking_for.map((position, index) => (
                      <div className='chat-small-message' key={index}>
                        <textarea
                          name='looking_for'
                          placeholder='Position'
                          className='placeholder'
                          style={{ width: '46%' }}
                          value={position}
                          onKeyDown={ev => props.checkButtonsArea(ev)}
                          onChange={ev => props.arrayChange('looking_for', index, ev)} />
                        <div className='icon-container'>
                          <img
                            onClick={() => props.removeElement('looking_for', index)}
                            alt=''
                            src='/imgs/Asset14.png'
                            width='20px'
                            height='20px/' />
                        </div>
                      </div>
                    ))}
                    {props.complete && (<div className='red'>The team is complete.</div>)}

                    <div className='add-myteam'>
                      <div className='add-row' onClick={() => props.addElement('looking_for')}>
                        <div className='icon-container'>
                          <img alt='' src='/imgs/Asset15.png' width='25px' height='25px/' />
                        </div>
                        <div className='links-content'>
                          <div style={{ color: '#616363' }}>Add position</div>
                        </div>
                      </div>
                      <div className='icon-container' />
                    </div>

                    <div className='line-myteam' />
                    <div>
                      <h4 className='user-details-header'>TECHNOLOGIES USED (WILL APPEAR AS TAGS IN YOUR TEAM PAGE):</h4>
                    </div>

                    {props.technologies && props.technologies.map((technology, index) => (
                      <div className='chat-small-message' key={index}>
                        <textarea
                          name='technologies'
                          placeholder='Technology'
                          className='placeholder'
                          style={{ width: '46%' }}
                          value={technology}
                          onKeyDown={ev => props.checkButtonsArea(ev)}
                          onChange={ev => props.arrayChange('technologies', index, ev)} />
                        <div className='icon-container'>
                          <img
                            onClick={() => props.removeElement('technologies', index)}
                            alt=''
                            src='/imgs/Asset14.png'
                            width='20px'
                            height='20px/' />
                        </div>
                      </div>
                    ))}

                    <div className='add-myteam'>
                      <div className='add-row' onClick={() => props.addElement('technologies')}>
                        <div className='icon-container'>
                          <img alt='' src='/imgs/Asset15.png' width='25px' height='25px/' />
                        </div>
                        <div className='links-content'>
                          <div style={{ color: '#616363' }}>Add technology</div>
                        </div>
                      </div>
                      <div className='icon-container' />
                    </div>

                    <div style={{ height: 80 }} />
                  </div>
                  <div className='resources-links'>
                    <h4 className='user-details-header'>PROJECT RESOURCES AND LINKS:</h4>

                    {props.links && props.links.map((link, index) => (
                      <div className='add-myteam' key={index}>
                        <div className='add-row'>
                          <div className='icon-container'>
                            <img alt='' src={`/imgs/Asset1${link.type === 'Link' ? '7' : '6'}.png`} width='25px' height='25px/' />
                          </div>
                          <div className='links-content'>
                            <div className='red'>{link.description.slice(0, 50) + '...'}</div>
                            {link.creator &&
                              <div className='cell-date-myteam'>
                                uploaded by {props.players.find(p => p.id === link.creator).handle} on {formatDate(link.createdAt)}
                              </div>
                            }
                          </div>
                        </div>
                        <div className='icon-container'>
                          <img
                            onClick={() => props.removeElement('links', index)}
                            alt=''
                            src='/imgs/Asset14.png'
                            width='20px'
                            height='20px/' />
                        </div>
                      </div>
                    ))}

                    {this.state.showForm ? (
                      <LinkForm
                        onSubmit={props.onChange}
                        links={props.links}
                        hideForm={() => this.setState({ showForm: false })} />
                    ) : (
                      <div className='add-myteam'>
                        <div className='add-row' onClick={() => this.setState({ showForm: true })}>
                          <div className='icon-container'>
                            <img alt='' src='/imgs/Asset15.png' width='25px' height='25px/' />
                          </div>
                          <div className='links-content'>
                            <div style={{ color: '#616363' }}>Add resource</div>
                          </div>
                        </div>
                        <div className='icon-container' />
                      </div>
                    )}

                  </div>
                </div>
              </div>
              <div className='top-middle-cell'>
                <button className='button' onClick={props.onSubmit}>SAVE TEAM</button>
              </div>
            </div>
          </div>
        </div>
        <Chat />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.participants
  }
}

export default connect(mapStateToProps)(TeamForm)
