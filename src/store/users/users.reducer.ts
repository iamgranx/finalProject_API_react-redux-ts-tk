import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { State } from "./users.types"
import {  User } from "api/users.types";

import { setUsers, setCurrentPage, setPerPage } from "./users.actions";

const initialState: State = {
    userList: [],
    user: null,
    currentPage: 1,
    perPage: 10,


};

export const usersReducer = createReducer<State>(initialState, {
    [setUsers.type]: (state, action: PayloadAction<User[]>) => {
        state.userList = action.payload
    },
    [setCurrentPage.type]: (state, action: PayloadAction<number>) => {
        state.currentPage = action.payload
    },
    [setPerPage.type]: (state, action: PayloadAction<number>) => {
        state.perPage = action.payload
    }
});