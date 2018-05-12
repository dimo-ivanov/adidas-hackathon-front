class FormHelpers {
  static handleFormChange (event, stateField) {
    const target = event.target
    const field = target.name
    const value = target.value

    const state = this.state[stateField]
    state[field] = value

    this.setState({ [stateField]: state })

    // this.setState({ [event.target.name]: event.target.value })
  }
}

export default FormHelpers
