import { State as UsersState } from "./users";

export interface RootState {
  readonly user: UsersState;
}