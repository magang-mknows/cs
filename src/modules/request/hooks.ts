import { useRecoilValue } from "recoil";
import { requestDummyData } from "./store";
import { TRequestDataResponse } from "./types";

export const useRequestData = (): TRequestDataResponse => {
  const get = useRecoilValue(requestDummyData);
  return {
    getRequestData: get,
  };
};
