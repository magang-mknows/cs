import { useRecoilState, useRecoilValue } from "recoil";
import { reportFilter, reportSearch } from "./store";
import { TReportDataResponse, TReportQueryResponse } from "./type";

export const useReportData = (): TReportDataResponse => {
  const get = useRecoilValue(reportFilter);
  return {
    getReportData: get,
  };
};

export const useReportQuery = (): TReportQueryResponse => {
  const [get, set] = useRecoilState(reportSearch);
  return {
    getReportQuery: get,
    setReportQuery: (val: string) => set(val),
  };
};
