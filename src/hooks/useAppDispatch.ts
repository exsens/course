import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../store/types/common'
import { Actions } from '../store/types/common'

export const useTypedDispatch = () => useDispatch<TypedDispatch>()
export type TypedDispatch = ThunkDispatch<RootState, unknown, Actions>

// export const useTypedDispatch = () => useDispatch<AppDispatch>()
// import { AppDispatch } from "../store/types/store"
// import { AnyAction } from "redux";
// import { AppDispatch } from "../store/types/store
