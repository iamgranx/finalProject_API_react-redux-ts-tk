import { createAction } from "@reduxjs/toolkit";

import {  User } from "../../api/users.types";

export const setUsers = createAction<User>("SET_USERS");
export const setCurrentPage = createAction<number>("SET_CURRENT_PAGE");
export const setPerPage = createAction<string>("SET_PER_PAGE");
export const setGender = createAction<string>("SET_GENDER");
export const setNat = createAction<string>("SET_NAT")