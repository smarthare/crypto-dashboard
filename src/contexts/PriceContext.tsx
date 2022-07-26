import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

import { ApiResponseEnum, ApiResponseType } from "types/common";
import { IPriceContext } from "types/context";
import { AssetsInitType, AssetsType, OrderByEnum } from "types/crypto";
import { getLatestPrices } from "apis";
import { AppContext } from "contexts/AppContext";

const PriceContext = createContext({
  prices: undefined,
  setParams: () => {},
} as IPriceContext);

function PriceProvider({ children }: { children: ReactNode }) {
  const { setMessage } = useContext(AppContext);

  const [prices, setPrices] = useState<AssetsType>();
  const [params, setParams] = useState<AssetsInitType>();

  useEffect(() => {
    if (params) {
      new Promise(async () => {
        const assets: ApiResponseType = await getLatestPrices({
          ...params,
          orderBy:
            params.orderBy === OrderByEnum.RANK
              ? OrderByEnum.CAP
              : params.orderBy,
          page: params.page + 1,
        });

        if (assets.type === ApiResponseEnum.ERROR) {
          setMessage(assets.data);
        } else {
          setPrices(assets.data as AssetsType);
        }
      });
    }
  }, [params, setMessage]);

  return (
    <PriceContext.Provider
      value={{
        prices,
        setParams,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}

export { PriceProvider, PriceContext };
