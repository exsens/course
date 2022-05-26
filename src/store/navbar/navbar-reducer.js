const initialState = {
  navigation: ['Profile', 'Dialogs', 'News', 'Music', 'Setting']
};

export const navbarReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    default:
      return state;
  }
}