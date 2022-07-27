import { OrderByEnum } from "types/crypto";

export const boardCells = [
  { label: "#", key: OrderByEnum.RANK, width: "10%", disable: false },
  { label: "Coin", key: OrderByEnum.ID, width: "", disable: false },
  { label: "Price", key: OrderByEnum.PRICE, width: "15%", disable: false },
  {
    label: "24h Volume",
    key: OrderByEnum.VOLUME,
    width: "15%",
    disable: false,
  },
  { label: "Mkt Cap", key: OrderByEnum.CAP, width: "15%", disable: false },
  { label: "Last 7 days", key: "price_chart", width: "15%", disable: true },
];
