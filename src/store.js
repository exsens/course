const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';

const store = {

  _callSubscriber() {
  },

  _state: {
    sidebar: {
      navigation: ['Profile', 'Dialogs', 'News', 'Music', 'Setting']
    },

    profileData: {
      profileInfo: {
        name: 'Dmitry K',
        banner: 'https://img3.goodfon.com/original/4368x2912/1/2f/ozero-gory-lesa-derevya.jpg',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Good_dog.jpg/1200px-Good_dog.jpg',
        info: [
          { title: 'Date of Birth', info: '19.02.1956' },
          { title: 'City', info: 'Minsk' },
          { title: 'Education', info: 'SU 11' },
          { title: 'website', info: 'www.www.ru' },
        ],
      },

      posts: [
        {
          avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
          text: 'Lorem ipsum dolor sit amet.'
        },
        {
          avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
          text: 'lor sit amet'
        },
        {
          avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
          text: 'ipsum dolor'
        },
      ],

      newPost: '',
    },

    dialogsData: {
      users: [
        { id: '0', name: 'JO' },
        { id: '1', name: 'WEL' },
        { id: '2', name: 'aaaaaaaaaaaaa' },
      ],

      messages: [
        { id: '0', text: ['Hi', 'Lorem, ipsum.'] },
        { id: '1', text: ['Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.'] },
        { id: '2', text: ['Hi', 'dolor ipsum .', 'Spasda', 'Lorem', 'ipsum dolor.'] },
      ]
    }
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addMessage(id, message) {
  //   this._state.dialogsData.messages.push({
  //     id: Math.floor(Math.random()), text: message
  //   })
  // }

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._state.profileData.posts.push({
        avatar: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg',
        text: this._state.profileData.newPost
      });
      this._state.profileData.newPost = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST) {
      this._state.profileData.newPost = action.payload;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      const userId = this._state.dialogsData.messages
        .findIndex((el) => el.id === action.payload.id);
      this._state.dialogsData.messages[userId].text.push(action.payload.text)
      this._callSubscriber(this._state);
    }
  },

}

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostAction = (text) => ({ type: UPDATE_NEW_POST, payload: text })
export const addMessageAction = ({id, text}) => ({type: ADD_MESSAGE, payload: {id, text}});

export default store;