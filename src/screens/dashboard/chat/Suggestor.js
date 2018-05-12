import React, { Component } from 'react'
import { connect } from 'react-redux'
import { socketSendMessage } from '../../../actions'
import debounce from 'lodash/debounce'

import './Suggestor.css'

class Suggestor extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: 0,
      searchText: this.props.searchText
    }
  }

  searchMentions = debounce(() => {
    this.props.dispatch(socketSendMessage({action: "mention_search", data: this.state.searchText}));
  }, 300)

  componentWillReceiveProps(props, state){
    if(this.state.searchText !== props.searchText){
      // console.log("New text::", props.searchText)
      this.setState({searchText: props.searchText}, () => {
        this.searchMentions();
      })
    }
  }

  handleKeyDown(event){
    if(!this.props.show) return;
    const { which } = event
    const { selected } = this.state
    if (which === 40 ) { // 40 is the character code of the down arrow
      event.preventDefault()

      this.setState({
        selected: (selected + 1) % this.props.mentions.length,
      })
    }
    if (which === 38 ) { // 38 is the character code of the up arrow
      event.preventDefault()

      this.setState({
        selected: selected === 0 ? (this.props.mentions.length - 1) : (selected - 1),
      })
    }
    if(which === 13) {
      event.preventDefault()
      const newText = `${this.props.textValue.slice(0, this.props.cursor.selectionStart - 1)}${this.props.mentions[selected].handle}${this.props.textValue.slice(this.props.cursor.selectionStart + this.props.mentions[selected].handle.length, this.props.textValue.length)}`
      // console.log(newText)
      if(this.props.onSuggetionSelect){
        this.props.onSuggetionSelect.call(null, newText, {...this.props.mentions[this.state.selected]})
      }
    }
  }

  renderSuggetions(){
    if(!this.props.show) return null
    return (
      <div className="suggestor-list">
        {this.props.mentions.map( (s, key) => (
          <div key={key} className={`suggestor-list-item ${key === this.state.selected ? 'selected' : ''}`}>
            {s.handle} <small>&lt;{s.email}&gt;</small>
          </div>
        ))}
      </div>
    )
  }
  render(){
    return (
      <div onKeyDown={this.handleKeyDown.bind(this)}>
        <div className="mentions-container">
          {this.renderSuggetions()}
        </div>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mentions: state.mentions.data
})

export default connect(mapStateToProps)(Suggestor)
