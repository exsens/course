import { makeAutoObservable } from 'mobx'

class Dialogs {
  users = [
    { id: 0, name: 'JO' },
    { id: 1, name: 'WEL' },
    { id: 2, name: 'aaaaaaaaaaaaa' },
  ]

  messages = [
    { id: 0, text: ['Hi', 'Lorem, ipsum.'] },
    {
      id: 1,
      text: ['Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.'],
    },
    {
      id: 2,
      text: ['Hi', 'dolor ipsum .', 'Spasda', 'Lorem', 'ipsum dolor.'],
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addMessage = (idMessage: number, textMessage: string) => {
    this.messages.map(({ id, text }) => (id === idMessage ? text.push(textMessage) : text))
  }
}

export default new Dialogs()
