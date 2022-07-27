import { styled } from "@mui/material";

export const StyledWallet = styled("div")`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const StyledConnectContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  & h1 {
    font-family: monospace !important;
    letter-spacing: 0.5rem;
    font-size: 2.6rem;
    margin: 0;
    padding: 0;
  }

  & img {
    text-align: center;
    width: 12rem;
  }
`;
