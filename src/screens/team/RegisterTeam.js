import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../../actions'
import { FormHelpers, Auth } from '../../helpers'
import TeamForm from './TeamForm'
import * as actions from '../../actions'

class RegisterTeam extends Component {
  constructor (props) {
    super(props)

    this.state = {
      myTeam: {
        name: '',
        cover: '/imgs/header.png',
        avatar: '/imgs/default-avatar.jpg',
        project_name: '',
        idea: '',
        participants: [Auth.getParticipant()],
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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkButtonsArea = this.checkButtonsArea.bind(this)
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

  removeArrayElement (arr, index) {
    let arrClone = [...this.state.myTeam[arr]]
    arrClone.splice(index, 1)
    let myTeam = { ...this.state.myTeam }
    myTeam[arr] = arrClone
    arr === 'looking_for' && (myTeam.complete = myTeam[arr].length === 0)
    this.setState({ myTeam: myTeam })
  }

  handleSubmit () {
    const { myTeam } = this.state
    if (myTeam.name === '' || myTeam.project_name === '' || myTeam.idea === '') {
      window.alert('Missing field(s).')
      return
    }

    this.props.dispatch(actions.teamRegister(myTeam))
  }

  render () {
    return (
      <TeamForm
        onChange={this.handleUserChange}
        roleChange={this.handleRoleChange}
        arrayChange={this.handleArrayChange}
        addElement={this.addArrayElement}
        removeElement={this.removeArrayElement}
        checkButtonsArea={this.checkButtonsArea}
        onSubmit={this.handleSubmit}
        {...this.state.myTeam} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myTeam: state.team.myTeam,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(RegisterTeam)
