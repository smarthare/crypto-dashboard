import { useContext, useEffect, useState } from "react";

import { AppContext } from "contexts/AppContext";
import { getMarketData } from "apis";
import { MarketDataType } from "types/crypto";
import { ApiResponseEnum } from "types/common";

const useMarketData = (coinId: string) => {
  const { setMessage } = useContext(AppContext);

  const [marketData, setMarketData] = useState<MarketDataType>();

  useEffect(() => {
    new Promise(async () => {
      const data = await getMarketData(coinId);

      if (data.type === ApiResponseEnum.ERROR) {
        setMessage(data.data);
      } else {
        setMarketData(data.data as MarketDataType);
      }
    });
  }, [coinId, setMessage]);

  return marketData;
};

export default useMarketData;
