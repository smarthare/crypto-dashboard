import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, useTheme } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import HomeIcon from "@mui/icons-material/Home";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BackIcon from "@mui/icons-material/ArrowBack";

import { AppContext } from "contexts/AppContext";
import { ComponentEnum } from "types/common";

import { ButtonGroup, IconWrapper, StyledButton } from "./styles";

const Header = ({ type }: { type: ComponentEnum }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const app = useContext(AppContext);

  const handleClick = (page: string) => () => {
    navigate(page);
  };

  const handleChangeTheme = () => {
    app.changeTheme(!app.theme);
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        {type === ComponentEnum.CHART ? (
          <StyledButton theme={theme} border={"0"} onClick={handleClick("/")}>
            <BackIcon />
            Back
          </StyledButton>
        ) : (
          <ButtonGroup>
            <StyledButton
              theme={theme}
              border={"3px"}
              onClick={handleClick("/")}
            >
              <HomeIcon />
              Home
            </StyledButton>
            <StyledButton
              theme={theme}
              border={"0"}
              onClick={handleClick("/wallet")}
            >
              <WalletIcon />
              Wallet
            </StyledButton>
          </ButtonGroup>
        )}
        <IconWrapper component="span" onClick={handleChangeTheme}>
          {app.theme ? <WbSunnyIcon /> : <WbSunnyOutlinedIcon />}
        </IconWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
