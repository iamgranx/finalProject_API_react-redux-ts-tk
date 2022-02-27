import { RootState } from "store/types";

export const getSlice = (state: RootState): RootState["user"] => state.user;