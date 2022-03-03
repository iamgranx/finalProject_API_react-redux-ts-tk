import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { State } from "./users.types"
import {  User } from "api/users.types";

import { setUsers, setCurrentPage, setPerPage, setGender, setNat } from "./users.actions";

const initialState: State = {
    userList: [],
    user: null,
    currentPage: 1,
    perPage: "10",
    gender: "female,male",
    nat: "au,br,ca,ch,de,dk,es,fi,fr,gb,ie,ir,nl,nz,tr,us",


};

export const usersReducer = createReducer<State>(initialState, {
    [setUsers.type]: (state, action: PayloadAction<User[]>) => {
        state.userList = action.payload
    },
    [setCurrentPage.type]: (state, action: PayloadAction<number>) => {
        state.currentPage = action.payload
    },
    [setPerPage.type]: (state, action: PayloadAction<string>) => {
        state.perPage = action.payload
    },
    [setGender.type]: (state, action: PayloadAction<string>) => {
        state.gender = action.payload
    },
    [setNat.type]: (state, action: PayloadAction<string>) => {
        state.nat = action.payload
    }

});