import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { State } from "./users.types"
import { User } from "api/users.types";

import { setUsers } from "./users.actions";

const initialState: State = {
    userList: [],
    user: null,

};

export const usersReducer = createReducer<State>(initialState, {
    [setUsers.type]: (state, action: PayloadAction<User[]>) => {
        state.userList = action.payload
    }
});