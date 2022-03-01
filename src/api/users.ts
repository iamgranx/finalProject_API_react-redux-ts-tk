import axios from "axios";

import {  ResponseSucces } from "./users.types"

export const getUser = async (currentPage: number, perPage: number) => {
  const { data } = await axios.get<ResponseSucces>(
    `https://randomuser.me/api/?page=${currentPage}&results=${perPage}&seed=abc`
    // `https://randomuser.me/api/?results=50&nat=${nat}`
  );
  return data
};