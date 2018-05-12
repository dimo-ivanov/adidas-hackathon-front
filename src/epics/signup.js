import { Observable } from 'rxjs'
import { apiUrl } from '../config/settings'
import { Headers } from '../helpers'
import { signupTypes } from '../actions'

export const signUpEpic = (action$) => {
  return action$.ofType(signupTypes.SIGNUP)
    .switchMap(action => {
      return Observable.ajax(
        {
          url: `${apiUrl}/signup/check-token`,
          method: 'POST',
          headers: Headers.get(),
          body: action.payload
        }
      )
      .map(res => ({ type: "SIGNUP_SUCCESS", payload: res.response }))
      .catch(err => {
        console.log("Well i'm in here!");
        return Observable.of({ type: "SIGNUP_FAIL", payload: err.response })
      })
    })
}

export const resetPasswordEpic = (action$) => {
  return action$.ofType(signupTypes.RESET_PASSWORD)
    .switchMap(action => {
      return Observable.ajax(
        {
          url: `${apiUrl}/signup/reset`,
          method: 'POST',
          headers: Headers.get(),
          body: action.payload
        }
      )
      .map(res => ({ type: signupTypes.RESET_PASSWORD_SUCCESS, payload: res.response }))
      .catch(err => {
        return Observable.of({ type: signupTypes.RESET_PASSWORD_FAIL, payload: err.response })
      })
    })
}

export const navigateAfterReset = (action$) => {
  return action$.ofType(signupTypes.RESET_PASSWORD_SUCCESS)
    .switchMap(action => {
      return Observable.create(obs => {
        // push('/login');
        obs.next({ type: "signupTypes.NAVIGATE_TO_LOGIN" });
        obs.complete();
      });

    })
}
