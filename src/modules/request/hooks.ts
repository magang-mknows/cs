import { useRecoilValue, useRecoilState } from "recoil";
import { requestDummyData, resultFilter, resultSearch } from "./store";
import { TRequestDataResponse, TResultDataResponse, TResultQueryResponse } from "./types";

export const useRequestData = (): TRequestDataResponse => {
  const get = useRecoilValue(requestDummyData);
  return {
    getRequestData: get,
  };
};

export const useResultData = (): TResultDataResponse => {
  const get = useRecoilValue(resultFilter);
  return {
    getResultData: get,
  };
};

export const useResultQuery = (): TResultQueryResponse => {
  const [get, set] = useRecoilState(resultSearch);
  return {
    getResultQuery: get,
    setResultQuery: (val: string) => set(val),
  };
};
