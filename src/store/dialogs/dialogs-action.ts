export const ADD_MESSAGE = 'dialog/ADD_MESSAGE'

type AddMessageAction = {
  type: typeof ADD_MESSAGE
  payload: object
}

export const addMessageAction = (id: number, text: string): AddMessageAction => ({
  type: ADD_MESSAGE,
  payload: { id, text },
})
