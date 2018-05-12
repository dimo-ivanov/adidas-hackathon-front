export const participantTypes = {
  GET: 'participant/GET',
  SAVE: 'participant/SAVE',
  UPDATE: 'participant/UPDATE_SINGLE',
  GET_RESPONSE: 'participant/GET_RESPONSE'
}

export const getParticipant = (id) => (
  {
    type: participantTypes.GET,
    id
  }
)
