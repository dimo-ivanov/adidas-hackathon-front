import { Observable } from 'rxjs'
import { apiUrl } from '../config/settings'
import { inviteTypes } from '../actions'
import { Headers } from '../helpers'

export const inviteEmailEpic = (action$) => {
  return action$.ofType(inviteTypes.EMAIL_INVITE)
    .switchMap(action => {
      return Observable.ajax(
        {
          url: `${apiUrl}/invites/email`,
          method: 'POST',
          headers: Headers.getWithAuth(),
          body: action.payload
        }
      )
        .map(res => ({ type: inviteTypes.EMAIL_INVITE_SUCCESS, payload: res.response }))
        .catch(err => {
          console.log(err)
          return Observable.of({ type: inviteTypes.EMAIL_INVITE_FAIL, payload: err.response })
        })
    })
}
