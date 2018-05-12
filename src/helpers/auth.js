export class Auth {
  static authenticateUser (token, user) {
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(user))
  }

  static isUserAuthenticated () {
    return window.localStorage.getItem('token') !== null
  }

  static deauthenticateUser () {
    window.localStorage.clear()
  }

  static setSocialAccountsInfo (socialAccounts) {
    let user = this.getUser()
    user['social_accounts'] = socialAccounts
    this.authenticateUser(this.getToken(), user)
  }

  static setAvatar (avatar) {
    let user = this.getUser()
    user['avatar'] = avatar
    this.authenticateUser(this.getToken(), user)
  }

  static getToken () {
    return window.localStorage.getItem('token')
  }

  static getUser () {
    const userJson = window.localStorage.getItem('user')
    if (userJson) {
      return JSON.parse(userJson)
    }

    return {}
  }

  static getName () {
    let name = this.getUser().name.split(' ')
    name.shift()
    return name.join(' ')
  }

  static getParticipant () {
    return this.getUser().participantId
  }

  static saveMyTeamId (team) {
    if (team && team.participants.indexOf(this.getParticipant()) > -1) {
      let user = this.getUser()
      user['teamId'] = team.id
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }

  static removeMyTeamId () {
    let user = this.getUser()
    delete user['teamId']
    window.localStorage.setItem('user', JSON.stringify(user))
  }

  static getMyTeamId () {
    return this.getUser().teamId
  }
}
