import { action, makeAutoObservable } from 'mobx'
import auth from './auth'
import profile from './profile'

class App {
  initialized = false
  constructor() {
    makeAutoObservable(this)
  }

  initializedApp = () => {
    auth.getAuth().then(
      action('fetchSuccess', () => {
        this.initialized = true
      }),
    )
  }
}

export default new App()
