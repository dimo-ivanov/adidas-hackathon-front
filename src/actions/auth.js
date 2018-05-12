export const authTypes = {
  ATTEMPT: 'auth/ATTEMPT',
  RESPONSE: 'auth/RESPONSE',
  SUCCESS: 'auth/SUCCESS',
  FAIL: 'auth/FAIL',
  SYNC: 'auth/SYNC_SOCIAL_ACOUNT',
  SYNC_RESPONSE: 'auth/SYNC_RESPONSE'
}

export const authAttempt = (credentials) => (
  {
    type: authTypes.ATTEMPT,
    credentials
  }
)

export const authSuccess = () => (
  {
    type: authTypes.SUCCESS
  }
)

export const authFail = () => (
  {
    type: authTypes.FAIL
  }
)

export const authSync = (profileData) => (
  {
    type: authTypes.SYNC,
    profileData
  }
)
