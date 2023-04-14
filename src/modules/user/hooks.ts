import { useRecoilState, useRecoilValue } from "recoil";
import { userFilter, userSearch } from "./store";
import { TUserDataResponse, TUserQueryResponse } from "./types";

export const useUserData = (): TUserDataResponse => {
  const get = useRecoilValue(userFilter);
  return {
    getUserData: get,
  };
};

export const useUserQuery = (): TUserQueryResponse => {
  const [get, set] = useRecoilState(userSearch);
  return {
    getUserQuery: get,
    setUserQuery: (val: string) => set(val),
  };
};
