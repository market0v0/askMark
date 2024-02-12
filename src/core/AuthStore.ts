import { action, observable, makeObservable } from 'mobx'
import { type userProfile } from '@/utils/auth.js'
import { keys } from '@/utils/enums'

export default class AuthStore {
  userProfile: userProfile | null = null
  authToken: string | null = null

  constructor () {
    makeObservable(this, {
      userProfile: observable,
      authToken: observable,
      loginUser: action,
      logoutUser: action,
      setProfile: action
    })
  }

  loginUser = (profile: any): void => {
    this.userProfile = profile.username``
    console.log('mark', profile.username)
    sessionStorage.setItem(keys.PROFILE, JSON.stringify(profile.username))
    sessionStorage.setItem(keys.AUTH_TOKEN_KEY, profile.token)
  }

  logoutUser = (): void => {
    this.userProfile = null
    sessionStorage.removeItem(keys.AUTH_TOKEN_KEY)
    sessionStorage.removeItem(keys.AUTH_TOKEN_KEY)
  }

  setProfile = (profile: userProfile): void => {
    console.log('mark', profile)
    this.userProfile = profile
  }
}
