export const errorTypes = {
  DISPLAY: 'error/DISPLAY',
  CLEAR: 'error/CLEAR'
}

export const errorDisplay = (err) => (
  {
    type: errorTypes.DISPLAY,
    err
  }
)

export const errorClear = () => (
  {
    type: errorTypes.CLEAR
  }
)
