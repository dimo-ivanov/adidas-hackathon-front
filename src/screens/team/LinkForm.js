import React, { Component } from 'react'
import { FormHelpers } from '../../helpers'
import './linkformstyle.css'

class Sample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      link: {
        type: 'Link',
        description: '',
        url: ''
      }
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.saveLink = this.saveLink.bind(this)
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'link')
  }

  saveLink () {
    if (this.state.link.url === '') {
      return
    }
    let linksClone = [...this.props.links]
    linksClone.push(this.state.link)
    const ev = {
      target: { name: 'links', value: linksClone }
    }

    this.props.onSubmit(ev)
    this.props.hideForm()
  }

  render () {
    const { type, description, url } = this.state.link

    return (
      <div>
        <div className='line-myteam' style={{ marginBottom: '10px' }} />
        <div className='chat-message link-form'>
          <form name='chat-message'>
            <select
              name='type'
              className='chat-message'
              value={type}
              onChange={this.handleUserChange}>
              <option>Link</option>
              <option>Resource</option>
            </select>
          </form>
        </div>
        <div className='chat-message link-form'>
          <form name='chat-message'>
            <textarea
              name='description'
              placeholder='Description'
              className='chat-message'
              value={description}
              onChange={this.handleUserChange} />
          </form>
        </div>
        <div className='chat-message link-form'>
          <form name='chat-message'>
            <textarea
              name='url'
              placeholder='URL'
              className='chat-message'
              value={url}
              onChange={this.handleUserChange} />
          </form>
        </div>
        <button className='button button-sm' onClick={this.saveLink}>ADD</button>
        <button className='button button-sm  link-form-bttn' onClick={this.props.hideForm}>CANCEL</button>
        <div className='line-myteam' style={{ marginTop: '10px' }} />
      </div>
    )
  }
}

export default Sample
