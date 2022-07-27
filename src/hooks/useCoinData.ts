import { useContext, useEffect, useState } from "react";

import { AppContext } from "contexts/AppContext";
import { getCoinData } from "apis";
import { CoinDataType } from "types/crypto";
import { ApiResponseEnum } from "types/common";
import { NetworkType } from "types/wallet";

const useCoinData = (network: NetworkType | undefined) => {
  const { setMessage } = useContext(AppContext);

  const [coinData, setCoinData] = useState<CoinDataType>();

  useEffect(() => {
    if (network) {
      new Promise(async () => {
        const data = await getCoinData(network.name);

        if (data.type === ApiResponseEnum.ERROR) {
          setMessage(data.data);
        } else {
          setCoinData(data.data as CoinDataType);
        }
      });
    }
  }, [network, setMessage]);

  return coinData;
};

export default useCoinData;
