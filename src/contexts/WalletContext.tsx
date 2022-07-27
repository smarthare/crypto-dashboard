import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ethers, Signer } from "ethers";

import { IWalletContext } from "types/context";
import { NetworkType } from "types/wallet";
import chains from "constants/chains";

const WalletContext = createContext({
  isConnected: false,
  isAvailable: false,
  address: "",
  signer: undefined,
  network: {} as NetworkType,
  connect: () => {},
  request: () => {},
  watch: () => {},
} as IWalletContext);

function WalletProvider({ children }: { children: ReactNode }) {
  const { ethereum } = window as any;

  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [network, setNetwork] = useState<NetworkType>({} as NetworkType);
  const [signer, setSigner] = useState<Signer>();

  const initialize = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const network = await provider.getNetwork();

    network &&
      chains.forEach(
        (chain) =>
          chain.id === network.chainId &&
          setNetwork({
            id: network.chainId,
            name: chain.name,
            chainname: network.name,
          })
      );
    setAddress(address);
    setSigner(signer);
    setIsConnected(ethereum.isConnected());
  }, [ethereum]);

  const connect = async () => {
    try {
      await initialize();
    } catch {}
  };

  useEffect(() => {
    if (ethereum) {
      ethereum.on("accountsChanged", ([newAddress]: Array<string>) => {
        setAddress(newAddress);
      });

      ethereum.on("chainChanged", async () => {
        await initialize();
      });
    }
  }, [ethereum, initialize]);

  useEffect(() => {
    setIsConnected(ethereum.isConnected());
  }, [ethereum]);

  const request = () => {
    ethereum.request({
      method: "eth_sendTransaction",
      params: {},
    });
  };

  const watch = async (address: string) => {
    // const provider = new ethers.providers.AlchemyProvider("homestead", "demo");

    // const balance = await provider.getBalance({
    //   address,
    //   tag: "latest",
    // });

    // console.log(balance);
    // return balance;
  };

  return (
    <WalletContext.Provider
      value={{
        isAvailable: !!ethereum,
        isConnected,
        address,
        signer,
        network,
        connect,
        request,
        watch,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletProvider, WalletContext };
