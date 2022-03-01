import { createAction } from "@reduxjs/toolkit";

import {  User } from "../../api/users.types";

export const setUsers = createAction<User>("SET_USERS");
export const setCurrentPage = createAction<number>("SET_CURRENT_PAGE");
export const setPerPage = createAction<number>("SET_PER_PAGE");