import { User } from "../../api/users.types";

export interface State {
  readonly userList: User[],
  readonly user: User | null;
}

