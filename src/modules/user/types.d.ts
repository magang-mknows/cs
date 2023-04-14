export type TUserDataDummy = {
  no: number;
  nik: number;
  nama: string;
  tanggal: string;
};

export type TUserDataResponse = { getUserData: TUserDataDummy[] };

export type TUserQueryResponse = { getUserQuery: string; setUserQuery: (val: string) => void };
