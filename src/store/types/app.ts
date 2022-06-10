import * as actions from '../app/app-actions';

export enum AppActionType {
  INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"
}

type ActionReturnType<T> = T extends {[key: string]: (...args: any[]) => infer R}  ? R : never;
export type AppAction = ActionReturnType<typeof actions>;

