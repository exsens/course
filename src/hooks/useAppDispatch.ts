import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/types/store"

export const useAppDispatch = (action: any) => useDispatch<AppDispatch>()