export const generalTypes = {
  GET_INIT_DATA: 'general/GET_INIT_DATA',
  INIT_DATA_RES: 'general/INIT_DATA_RESPONSE',
  DISPLAY_ALERT: 'general/DISPLAY_ALERT'
}

export const getInitData = () => (
  {
    type: generalTypes.GET_INIT_DATA
  }
)

export const displayAlert = (text) => (
  {
    type: generalTypes.DISPLAY_ALERT,
    text
  }
)
