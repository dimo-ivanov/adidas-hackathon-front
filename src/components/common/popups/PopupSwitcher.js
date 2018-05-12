import React from 'react'
import { connect } from 'react-redux'
import ApplyTeam from './ApplyTeam'
import InvitePlayer from './InvitePlayer'
import InvitePlayerEmail from './InvitePlayerEmail'
import Notification from './Notification'

const styling = {
  position: 'absolute',
  background: '#ffffff6e',
  width: '100%',
  height: '100%',
  zIndex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const PopupSwitcher = (props) => (
  <div style={styling}>
    {props.popup.showApplyTeam && <ApplyTeam />}
    {props.popup.showInvitePlayer && <InvitePlayer />}
    {props.popup.showNotification && <Notification />}
    {props.popup.showEmailInvite && <InvitePlayerEmail />}
  </div>
)

const mapStateToProps = (state) => {
  return {
    popup: state.popup
  }
}

export default connect(mapStateToProps)(PopupSwitcher)
