import { AssetsType } from "./crypto";
import { MessageContentType } from "./common";

/*------------------ Context Interfaces ------------------*/
export interface IAppContext {
  message: MessageContentType;
  theme: boolean;
  setMessage: Function;
  changeTheme: Function;
}

export interface IPriceContext {
  prices: AssetsType;
  setParams: Function;
}
