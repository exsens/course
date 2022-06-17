import { makeAutoObservable } from 'mobx'

class Navbar {
  navigation = ['Profile', 'Dialogs', 'News', 'Users', 'Music', 'Setting']

  constructor() {
    makeAutoObservable(this)
  }
}

export default new Navbar()
