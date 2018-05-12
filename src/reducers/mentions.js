const initialState = {
  data: [],
}

const sample = (state = initialState, action) => {
  switch (action.type) {
    case 'mentions/CHECK_MENTIONS_SUCCESS':
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state
  }
}

export default sample
