import { createAction } from "@reduxjs/toolkit";

import { User } from "../../api/users.types";

export const setUsers = createAction<User>("SET_USERS")