import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/types/store'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
