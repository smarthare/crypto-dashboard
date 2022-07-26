import { AssetsType } from "types/crypto";

/*------------------ Common Enums ------------------*/
export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

export enum ApiResponseEnum {
  ERROR,
  SUCCESS,
}

export enum MessageTypeEnum {
  ERROR,
  WARN,
  INFO,
  SUCCESS,
}

export enum ComponentEnum {
  BOARD,
  CHART,
  WALLET,
}

/*------------------ Common Types ------------------*/
export type MessageContentType = {
  type: MessageTypeEnum;
  text: string;
};

export type ErrorType = {
  name: string;
  message: string;
};

export type ApiResponseType = {
  type: ApiResponseEnum,
  data: AssetsType | MessageContentType
};
