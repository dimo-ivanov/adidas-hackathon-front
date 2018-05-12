export const inviteTypes = {
  EMAIL_INVITE: 'invites/EMAIL_INVITE',
  EMAIL_INVITE_SUCCESS: 'invites/EMAIL_INVITE_SUCCESS',
  EMAIL_INVITE_FAIL: 'invites/EMAIL_INVITE_FAIL'
}

export const inviteViaMail = (payload) => (
  {
    type: inviteTypes.EMAIL_INVITE,
    payload: payload
  }
)
