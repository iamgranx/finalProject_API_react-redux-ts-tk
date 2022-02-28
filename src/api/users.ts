import axios from "axios";

import {  ResponseSucces } from "./users.types"

export const getUser = async () => {
  const { data } = await axios.get<ResponseSucces>(
    "https://randomuser.me/api/?results=50"
  );
  return data
};