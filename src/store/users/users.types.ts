import { User } from "../../api/users.types";

export interface State {
  readonly userList: User[],
  readonly user: User | null;
  readonly currentPage: number;
  readonly perPage: string;
  readonly gender: string;
  readonly nat: string;
}
