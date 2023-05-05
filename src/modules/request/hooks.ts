import { useRecoilValue, useRecoilState } from "recoil";
import { requestDummyData, resultFilter, resultSearch, sortedResultData } from "./store";
import {
  TRequestDataResponse,
  TResultDataResponse,
  TResultQueryResponse,
  TSortedDataResponse,
} from "./types";

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

export const useSortedData = (): TSortedDataResponse => {
  const get = useRecoilValue(sortedResultData);
  return {
    getSortedData: get,
  };
};

export const useResultQuery = (): TResultQueryResponse => {
  const [get, set] = useRecoilState(resultSearch);
  return {
    getResultQuery: get,
    setResultQuery: (val: string) => set(val),
  };
};
