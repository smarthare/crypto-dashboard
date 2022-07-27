import { useCallback, useContext, useEffect } from "react";

import { MessageTypeEnum, MessageContentType } from "types/common";
import { AppContext } from "contexts/AppContext";

import CustomButton from "components/CustomButton";
import WalletContent from "./WalletContent";
import { WalletContext } from "contexts/WalletContext";

import { StyledWallet, StyledConnectContainer } from "./styles";

const Wallet = () => {
  const { setMessage } = useContext(AppContext);
  const { connect, isAvailable, isConnected } =
    useContext(WalletContext);

  const recommendMessage = useCallback(
    () =>
      setMessage({
        type: MessageTypeEnum.WARN,
        text: (
          <a
            href="https://metamask.io/download/"
            target="_blank"
            rel="noreferrer"
          >
            Install Metamask...
          </a>
        ),
      } as MessageContentType),
    [setMessage]
  );

  const handleConnect = async () => {
    if (isAvailable) {
      await connect();
    } else {
      recommendMessage();
    }
  };

  useEffect(() => {
    !isAvailable && recommendMessage();
  }, [isAvailable, recommendMessage]);

  return (
    <StyledWallet>
      {isConnected ? (
        <WalletContent />
      ) : (
        <StyledConnectContainer>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
            alt="metamask"
          />
          <h1>METAMASK</h1>
          <CustomButton size="lg" onClick={handleConnect}>
            Connect Wallet
          </CustomButton>
        </StyledConnectContainer>
      )}
    </StyledWallet>
  );
};

export default Wallet;
