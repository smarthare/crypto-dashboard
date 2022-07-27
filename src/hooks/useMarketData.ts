import { useContext, useEffect, useState } from "react";

import { AppContext } from "contexts/AppContext";
import { getMarketData } from "apis";
import { MarketDataType } from "types/crypto";
import { ApiResponseEnum } from "types/common";

const useMarketData = (coinId: string) => {
  const { setMessage } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState<boolean>();
  const [marketData, setMarketData] = useState<MarketDataType>();

  useEffect(() => {
    setIsLoading(true);

    new Promise(async () => {
      const data = await getMarketData(coinId);

      if (data.type === ApiResponseEnum.ERROR) {
        setMessage(data.data);
        setIsLoading(undefined);
      } else {
        setMarketData(data.data as MarketDataType);
        setIsLoading(false);
      }
    });
  }, [coinId, setMessage]);

  return { isLoading, marketData };
};

export default useMarketData;
