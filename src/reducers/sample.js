const initialState = {
  data: 'stuff',
  loading: false
}

const sample = (state = initialState, action) => {
  switch (action.type) {
    case 'SAMPLE_ON':
      return {
        ...state,
        data: 'On'
      }
    case 'SAMPLE_OFF':
      return {
        ...state,
        data: 'Off'
      }
    case 'LOADING_START':
      return {
        ...state,
        loading: true
      }
    case 'LOADING_STOP':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default sample
