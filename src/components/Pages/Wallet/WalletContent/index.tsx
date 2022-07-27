import { useContext, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import CopyIcon from "@mui/icons-material/ContentCopy";
import EyeIcon from "@mui/icons-material/Visibility";
import OpenIcon from "@mui/icons-material/OpenInNew";
import DotIcon from "@mui/icons-material/FiberManualRecord";

import { WalletContext } from "contexts/WalletContext";
import useCoinData from "hooks/useCoinData";
import { thumbImageUrl } from "utils/url";

import {
  StyledContent,
  StyledHeader,
  StyledRow,
  WithCursor,
  StyledBalanceContent,
  StyledBalanceWrapper,
  StyledButtonGroup,
  StyledListRow,
} from "./styles";
import CustomButton from "components/CustomButton";
import { balances } from "constants/balance";

const WalletContent = () => {
  const { isConnected, address, network, request, watch } =
    useContext(WalletContext);
  const coinData = useCoinData(network);

  const [tooltipTitle, setTooltipTitle] =
    useState<string>("click here to copy");

  useEffect(() => {
    coinData && watch(coinData.symbol);
  }, [coinData, watch]);

  const handleClick = () => {
    navigator.clipboard.writeText(address || "");
    setTooltipTitle("copied to clipboard!");
  };

  const handleOpenMetamask = async () => {
    await request();
    return true;
  };

  return (
    <StyledContent>
      <StyledHeader>
        <div>
          {coinData && (
            <img src={thumbImageUrl(coinData.image.small)} alt={coinData.id} />
          )}
          {network.name} Network
        </div>
        <span>
          <DotIcon />
          {isConnected ? "Connected" : "disconnected"}
        </span>
      </StyledHeader>
      <StyledRow>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
            alt="metamask"
          />
          {address.slice(0, 5)}...{address.slice(-8)}
        </div>
        <div>
          <Tooltip title={tooltipTitle}>
            <WithCursor onClick={handleClick}>
              <CopyIcon />
            </WithCursor>
          </Tooltip>
          <WithCursor onClick={handleOpenMetamask}>
            <OpenIcon />
          </WithCursor>
        </div>
      </StyledRow>
      <StyledBalanceWrapper>
        <StyledBalanceContent>
          <p>Total Balance</p>
          <h1>
            $2200 <EyeIcon />
          </h1>
          <StyledButtonGroup>
            <CustomButton size="lg" onClick={handleOpenMetamask}>
              Buy
            </CustomButton>
            <CustomButton size="lg" onClick={handleOpenMetamask}>
              Send
            </CustomButton>
          </StyledButtonGroup>
        </StyledBalanceContent>
      </StyledBalanceWrapper>
      <div>
        {balances.map((balance) => (
          <StyledListRow>
            <div>
              <img src={balance.image} alt="metamask" />
              <div>
                {balance.symbol}<br />
                {balance.network}
              </div>
            </div>
            <span>
              {balance.token}<br />
              ${balance.usd}
            </span>
          </StyledListRow>
        ))}
      </div>
    </StyledContent>
  );
};

export default WalletContent;
