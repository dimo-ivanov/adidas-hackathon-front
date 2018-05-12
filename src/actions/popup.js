export const popupTypes = {
  SWITCH_APPLY_TEAM: 'popup/SWITCH_APPLY_TEAM',
  SWITCH_INVITE_PLAYER: 'popup/SWITCH_INVITE_PLAYER',
  SWITCH_NOTIFICATION: 'popup/SWITCH_NOTIFICATION',
  SWITCH_EMAIL_INVITE: 'popup/SWITCH_EMAIL_INVITE',
}

export const switchApplyTeamPopup = (payload) => (
  {
    type: popupTypes.SWITCH_APPLY_TEAM,
    payload
  }
)

export const switchInvitePlayer = (payload) => (
  {
    type: popupTypes.SWITCH_INVITE_PLAYER,
    payload
  }
)

export const switchEmailInvite = (payload) => (
  {
    type: popupTypes.SWITCH_EMAIL_INVITE,
    payload
  }
)

export const switchNotification = (payload) => (
  {
    type: popupTypes.SWITCH_NOTIFICATION,
    payload
  }
)
