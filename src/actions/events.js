export const eventTypes = {
  GET: 'event/GET',
  GET_RESPONSE: 'event/GET_RESPONSE',
  SAVE: 'event/SAVE'
}

export const getEvent = (code) => ({
  type: eventTypes.GET,
  code
})
