import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import store, { rootReducers } from '../redux-store'
import { AppAction } from './app'
import { AuthAction } from './auth'
import { ProfileAction } from './profile'
import { UserAction } from './users'

export type Nullable<T> = null | T
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducers>

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Actions>
export type ThunkType1<A extends AnyAction> = ThunkAction<Promise<void>, RootState, unknown, A>

export type Actions = ProfileAction | UserAction | AuthAction | AppAction
