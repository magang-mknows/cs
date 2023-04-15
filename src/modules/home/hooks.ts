import { useRecoilValue } from "recoil";
import { cardDashboardData } from "./store";
import { TCardDataResponse } from "./types";

export const useCardData = (): TCardDataResponse => {
  const get = useRecoilValue(cardDashboardData);
  return {
    getCardData: get,
  };
};
