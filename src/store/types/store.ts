import store, { rootReducers } from '../redux-store'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducers>
