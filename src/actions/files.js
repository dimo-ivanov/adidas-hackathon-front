export const fileTypes = {
  UPLOAD: 'file/UPLOAD',
  UPLOAD_RESPONSE: 'file/UPLOAD_RESPONSE'
}

export const uploadFile = (payload) => (
  {
    type: fileTypes.UPLOAD,
    payload
  }
)
