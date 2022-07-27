import axios from "axios";

import { AssetsInitType } from "types/crypto";
import {
  ApiResponseEnum,
  MessageContentType,
  MessageTypeEnum,
} from "types/common";

const API = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
  headers: {
    "Set-Cookie": "cross-site-cookie=whatever; SameSite=None; Secure",
  },
});

export const getLatestPrices = ({
  orderBy,
  orderDir,
  perPage,
  page,
}: AssetsInitType) =>
  API.get(
    `/markets?vs_currency=usd&;order=${orderBy}_${orderDir}&;per_page=${perPage}&;page=${page}&;sparkline=true`
  )
    .then((receipt) => ({ type: ApiResponseEnum.SUCCESS, data: receipt.data }))
    .catch((error) => ({
      type: ApiResponseEnum.ERROR,
      data: {
        type: MessageTypeEnum.ERROR,
        text: error.message,
      } as MessageContentType,
    }));

export const getCoinData = (coinId: string) =>
  API.get(
    `/${coinId}`
  )
    .then((receipt) => ({ type: ApiResponseEnum.SUCCESS, data: receipt.data }))
    .catch((error) => ({
      type: ApiResponseEnum.ERROR,
      data: {
        type: MessageTypeEnum.ERROR,
        text: error.message,
      } as MessageContentType,
    }));

export const getMarketData = (coinId: string) =>
  API.get(`${coinId}/ohlc?vs_currency=usd&;days=7`)
    .then((receipt) => ({ type: ApiResponseEnum.SUCCESS, data: receipt.data }))
    .catch((error) => ({
      type: ApiResponseEnum.ERROR,
      data: {
        type: MessageTypeEnum.ERROR,
        text: error.message,
      } as MessageContentType,
    }));

export const getTokenData = (
  blockchain: string,
  network: string,
  address: string
) =>
  axios
    .get(
      `https://rest.cryptoapis.io/v2/blockchain-data/${blockchain}/${network}/addresses/${address}/tokens?limit=50&offset=0`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "842d7e59ee1ab51ebf1fdaf918e7854410aaacd4", // should be moved to env in production
        },
      }
    )
    .then((receipt) => ({ type: ApiResponseEnum.SUCCESS, data: receipt.data }))
    .catch((error) => ({
      type: ApiResponseEnum.ERROR,
      data: {
        type: MessageTypeEnum.ERROR,
        text: error.message,
      } as MessageContentType,
    }));
