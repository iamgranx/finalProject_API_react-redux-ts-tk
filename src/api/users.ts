import axios from "axios";

import {  ResponseSucces } from "./users.types"

export const getUser = async (currentPage: number, perPage: string, nat: string, gender: string) => {
  const { data } = await axios.get<ResponseSucces>(
    `https://randomuser.me/api/?page=${currentPage}&results=${perPage}&seed=abc&nat=${nat}&gender=${gender}`
  );
  return data
};