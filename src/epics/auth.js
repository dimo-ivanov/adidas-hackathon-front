import { Observable } from 'rxjs'
import { apiUrl } from '../config/settings'
import { authTypes, teamTypes, participantTypes, errorTypes, generalTypes } from '../actions'
import { Auth, Headers } from '../helpers'

export const attemptEpic = (action$) => {
  return action$.ofType(authTypes.ATTEMPT)
    .switchMap(action => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/auth/login`,
            method: 'POST',
            headers: Headers.get(),
            body: action.credentials
          }
        )
        .map(res => ({ type: authTypes.RESPONSE, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const responseEpic = (action$) => {
  return action$.ofType(authTypes.RESPONSE)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            const { token, user, teams, participants } = action.payload
            Auth.authenticateUser(token, user)
            obs.next({ type: authTypes.SUCCESS })
            obs.next({ type: teamTypes.GET_ALL_RESPONSE, payload: { success, teams } })
            obs.next({ type: participantTypes.SAVE, participants })
            obs.complete()
          }

          obs.next({ type: authTypes.FAIL })
          obs.next({ type: errorTypes.DISPLAY, err: action.payload.err })
          obs.complete()
        })
        .catch(err => window.alert(err))
    })
}

export const failEpic = (action$) => {
  return action$.ofType(authTypes.FAIL)
    .switchMap(() => {
      return Observable
        .create(obs => {
          Auth.deauthenticateUser()
          obs.complete()
        })
        .catch(err => window.alert(err))
    })
}

export const syncEpic = (action$) => {
  return action$.ofType(authTypes.SYNC)
    .switchMap(action => {
      return Observable
        .ajax(
          {
            url: `${apiUrl}/auth/sync`,
            method: 'POST',
            headers: Headers.getWithAuth(),
            body: action.profileData
          }
        )
        .map(res => ({ type: authTypes.SYNC_RESPONSE, payload: res.response }))
        .catch(err => window.alert(err))
    })
}

export const syncResEpic = (action$) => {
  return action$.ofType(authTypes.SYNC_RESPONSE)
    .switchMap(action => {
      return Observable
        .create(obs => {
          const { success } = action.payload
          if (success) {
            Auth.setSocialAccountsInfo(action.payload.social_accounts)
            Auth.setAvatar(action.payload.avatar)
            obs.next({ type: authTypes.SUCCESS })
            obs.next({ type: generalTypes.DISPLAY_ALERT, text: 'Successfull sync.' })
          } else {
            obs.next({ type: generalTypes.DISPLAY_ALERT, text: 'An error occurred while saving your info.' })
          }
          obs.complete()
        })
    })
}
