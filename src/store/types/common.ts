import { ThunkAction } from 'redux-thunk';
import store, {rootReducers} from '../redux-store';
import { ProfileAction } from './profile';

export type Nullable<T> = null | T;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducers>

export type ThunkType = ThunkAction<void, RootState, unknown, Actions>

type Actions = ProfileAction