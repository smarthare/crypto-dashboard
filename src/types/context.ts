import { AssetsType } from "./crypto";
import { MessageContentType } from "./common";
import { NetworkType } from "./wallet";
import { Signer } from "ethers";

/*------------------ Context Interfaces ------------------*/
export interface IAppContext {
  message: MessageContentType;
  theme: boolean;
  setMessage: Function;
  changeTheme: Function;
}

export interface IPriceContext {
  isLoading: boolean | undefined;
  prices: AssetsType;
  setParams: Function;
}

export interface IWalletContext {
  isConnected: boolean;
  isAvailable: boolean;
  address: string;
  signer: Signer | undefined;
  network: NetworkType;
  connect: Function;
  request: Function;
  watch: Function;
}
