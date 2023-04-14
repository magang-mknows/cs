export type TRequestDummyData = {
  icon: string;
  name: string;
  totalData: number;
  totalNotifikasi: number;
};

export type TRequestDataResponse = { getRequestData: TRequestDummyData[] };
