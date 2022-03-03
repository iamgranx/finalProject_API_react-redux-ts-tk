import axios from "axios";

import {  ResponseSucces } from "./users.types"

export const getUser = async (currentPage: number, perPage: string, nat: string, gender: string) => {
  const { data } = await axios.get<ResponseSucces>(
    `https://randomuser.me/api/1.2/?nat=${nat}&gender=${gender}&page=${currentPage}&results=${perPage}&seed=abc`
  );
  return data
};