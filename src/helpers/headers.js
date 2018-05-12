import { Auth } from './auth'

export class Headers {
  static get () {
    return { 'Content-Type': 'application/json' }
  }

  static getWithAuth () {
    return {
      'Content-Type': 'application/json',
      'Authorization': Auth.getToken()
    }
  }

  static getOnlyAuth () {
    return {
      'Authorization': Auth.getToken()
    }
  }
}
