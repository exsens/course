const initialState = {
  navigation: ['Profile', 'Dialogs', 'News', 'Users', 'Music', 'Setting'],
}

type InitialState = {
  navigation: Array<string>
}

export const navbarReducer = (state = initialState, { type }: any): InitialState => {
  switch (type) {
    default:
      return state
  }
}
