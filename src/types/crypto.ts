/*------------------ Cryptocurrency Enums ------------------*/
export enum OrderByEnum {
  RANK = "rank",
  ID = "id",
  PRICE = "price",
  VOLUME = "volume",
  CAP = "market_cap",
}

/*------------------ Cryptocurrency Types ------------------*/
export type SparkLineDataType = {
  price: Array<number>;
  symbol: string;
  total_supply: number;
  total_volume: number;
};

export type AssetType = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  market_cap_rank: string;
  supply: string;
  total_volume: number;
  current_price: number;
  market_cap: number;
  sparkline_in_7d: SparkLineDataType;
};

export type AssetsInitType = {
  orderBy: string;
  orderDir: string;
  perPage: number;
  page: number;
};

export type AssetsType = Array<AssetType> | undefined;

export type OrderDirType = "asc" | "desc";

export type MarketDataType = Array<[number, number]>;
