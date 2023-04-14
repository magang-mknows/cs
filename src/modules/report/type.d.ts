export type TReportDataDummy = {
  no: number;
  nik: number;
  nama: string;
  status: string;
};

export type TReportDataResponse = { getReportData: TReportDataDummy[] };

export type TReportQueryResponse = {
  getReportQuery: string;
  setReportQuery: (val: string) => void;
};
