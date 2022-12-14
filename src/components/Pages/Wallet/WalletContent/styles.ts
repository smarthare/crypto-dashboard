import { styled } from "@mui/material";

export const StyledContent = styled("div")`
  width: 70%;
  min-height: 30rem;
  border-radius: 1rem;
  padding: 0 1rem;

  background: ${({ theme }: { theme: any }) => theme.grey.background};
`;

export const StyledRow = styled("div")`
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;

    & img {
      width: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;

export const StyledHeader = styled(StyledRow)`
  color: ${({ theme }: { theme: any }) => theme.success};
  border-bottom: 3px solid ${({ theme }: { theme: any }) => theme.grey.border};

  & div {
    text-transform: capitalize;
    color: ${({ theme }: { theme: any }) => theme.grey.text};
  }

  & span {
    display: flex;

    & svg {
      width: 1rem;
    }
  }
`;

export const WithCursor = styled("div")`
  cursor: pointer;
  margin-left: 1rem;
`;

export const StyledBalanceWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

export const StyledText = styled("p")`
  margin: 0;
  color: ${({ theme }: { theme: any }) => theme.grey.title};
`;

export const StyledBalanceContent = styled("div")`
  text-align: center;

  & h1 {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;

    & svg {
      margin-left: 0.5rem;
    }
  }
`;

export const StyledButtonGroup = styled("div")`
  & button {
    margin: 0.5rem;
  }
`;

export const StyledList = styled("div")`
  margin-top: 1rem;
`;

export const StyledListRow = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitleContent = styled("div")`
  display: flex;
  align-items: center;

  & img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    background: #fff;
    padding: 0.2rem;
    border-radius: 5rem;
  }

  & div {
    flex-direction: column;
    align-items: baseline;

    & p {
      margin: 0;
      color: ${({ theme }: { theme: any }) => theme.grey.title};
    }
  }
`;

export const StyledPriceContent = styled("div")`
  text-align: right;
`;
