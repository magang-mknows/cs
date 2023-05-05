export type TRequestDummyData = {
  icon: string;
  name: string;
  totalData: number;
  totalNotifikasi: number;
  category: string;
};

export type TRequestDataResponse = { getRequestData: TRequestDummyData[] };

export type TResultDataDummy = {
  id: number;
  no: number;
  nik: number;
  nama: string;
  tggl_permintaan: string;
  tggl_selesai: string;
  skor: string;
};

export type TResultDataResponse = { getResultData: TResultDataDummy[] };

export type TSortedDataResponse = { getSortedData: TSortedDataDummy[] };

export type TResultQueryResponse = {
  getResultQuery: string;
  setResultQuery: (val: string) => void;
};
