import { configureStore, combineReducers} from "@reduxjs/toolkit";

import { usersReducer } from "./users/users.reducer";

const reducer = combineReducers({user: usersReducer});

export default configureStore({ reducer });