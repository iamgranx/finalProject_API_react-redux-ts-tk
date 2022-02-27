import axios from "axios";

import { User } from "./users.types"

export const getUser = async () => {
  const { data } = await axios.get<User[]>(
    "https://randomuser.me/api/"
  );
  return data
};