const initialState = {
  token: '',
  loading: false,
  error: '',
  done: false
}

const sample = (state = initialState, action) => {
  switch (action.type) {
    case 'signup/SIGNUP':
      return {
        ...state,
        loading: true,
        error: ''
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        token: action.payload._id
      }
    case 'SIGNUP_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case 'signup/PASSWORD_NOT_MATCH':
      return {
        ...state,
        error: 'Passwords does not match!'
      }
    case 'signup/RESET_PASSWORD':
      return {
        ...state,
        error: '',
        loading: true
      }
    case 'signup/RESET_PASSWORD_FAIL':
      return {
        ...state,
        error: action.payload ? action.payload.error : 'There was an error!',
        loading: false
      }
    case 'signup/RESET_PASSWORD_SUCCESS':
      return {
        ...state,
        loading: false
      }
    case 'signupTypes.NAVIGATE_TO_LOGIN':
      return {
        ...state,
        done: true
      }
    default:
      return state
  }
}

export default sample
