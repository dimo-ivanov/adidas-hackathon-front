import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../../actions'
import { FormHelpers } from '../../helpers'
import TeamForm from './TeamForm'
import * as actions from '../../actions'

class ManageTeam extends Component {
  constructor (props) {
    super(props)

    this.state = {
      myTeam: {
        name: '',
        cover: '/imgs/header.png',
        avatar: 'http://www.westside-tennis.com/wp-content/uploads/2015/01/3-uses.png',
        project_name: '',
        idea: '',
        participants: [],
        roles: {},
        looking_for: [],
        technologies: [],
        links: [],
        complete: false
      }
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleRoleChange = this.handleRoleChange.bind(this)
    this.handleArrayChange = this.handleArrayChange.bind(this)
    this.addArrayElement = this.addArrayElement.bind(this)
    this.removeArrayElement = this.removeArrayElement.bind(this)
    this.removeParticipant = this.removeParticipant.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkButtonsArea = this.checkButtonsArea.bind(this)
  }

  componentDidMount () {
    // JSON.stringify(this.props.myTeam) !== '{}' && this.setState({myTeam: this.props.myTeam})
    this.props.dispatch(actions.getMyTeam())
  }

  componentWillReceiveProps (nextProps) {
    let { myTeam, players } = nextProps
    if (JSON.stringify(myTeam) !== '{}' && JSON.stringify(players) !== '[]') {
      this.setState({ myTeam: {...myTeam} })
    }
  }

  checkButtonsArea (event) {
    if (event.which === 13 && !event.shiftKey) {
      event.preventDefault()
      this.addArrayElement(event.target.name)
    }
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'myTeam')
  }

  handleRoleChange (id, ev) {
    let roles = { ...this.state.myTeam.roles }
    roles[id] = ev.target.value
    const myTeam = { ...this.state.myTeam, roles: roles }
    this.setState({ myTeam: myTeam })
  }

  handleArrayChange (arr, index, ev) {
    let arrClone = [...this.state.myTeam[arr]]
    arrClone[index] = ev.target.value
    let myTeam = { ...this.state.myTeam }
    myTeam[arr] = arrClone
    this.setState({ myTeam: myTeam })
  }

  addArrayElement (arr) {
    let arrClone = [...this.state.myTeam[arr]]
    arrClone.push('')
    let myTeam = { ...this.state.myTeam }
    myTeam[arr] = arrClone
    arr === 'looking_for' && (myTeam.complete = myTeam[arr].length === 0)
    this.setState({ myTeam: myTeam })
  }

  removeArrayElement (arr, index, id) {
    let arrClone = [...this.state.myTeam[arr]]
    arrClone.splice(index, 1)
    let myTeam = { ...this.state.myTeam }
    myTeam[arr] = arrClone
    arr === 'looking_for' && (myTeam.complete = myTeam[arr].length === 0)
    arr === 'participants' && (delete myTeam.roles[id])
    this.setState({ myTeam: myTeam })
  }

  removeParticipant (p) {
    const index = this.state.myTeam.participants.indexOf(p)
    this.removeArrayElement('participants', index, p._id)
  }

  handleSubmit () {
    const { myTeam } = this.state
    if (myTeam.name === '' || myTeam.project_name === '' || myTeam.idea === '') {
      console.error('Missing field(s).') // TODO: Implement in UI.
      return
    }

    const oldTeam = this.props.myTeam

    const diff = Object.keys(myTeam).reduce((diff, key) => {
      if (oldTeam[key] === myTeam[key]) return diff
      return {
        ...diff,
        [key]: myTeam[key]
      }
    }, {})

    JSON.stringify(diff) !== '{}' && this.props.dispatch(actions.teamManage(diff))
  }

  render () {
    return (
      <TeamForm
        onChange={this.handleUserChange}
        roleChange={this.handleRoleChange}
        arrayChange={this.handleArrayChange}
        addElement={this.addArrayElement}
        removeElement={this.removeArrayElement}
        removeParticipant={this.removeParticipant}
        checkButtonsArea={this.checkButtonsArea}
        onSubmit={this.handleSubmit}
        {...this.state.myTeam} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myTeam: state.team.myTeam,
    players: state.participants
  }
}

export default connect(mapStateToProps)(ManageTeam)
