import { Box, Toolbar, styled, AppBar } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  background: ${({ theme }: { theme: any }) => theme.grey.appbar};
`;

export const ButtonGroup = styled(Toolbar)`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const StyledButton = styled("button")(
  ({ border, theme }: { border: string; theme: any }) => `
    height: 4rem;
    display: flex;
    line-height: inherit;
    align-items: center;
    background: inherit;
    border: 0;
    border-bottom: 0.2rem solid ${
      border === "true" ? theme.success : theme.palette.background.default
    };
    color: ${theme.grey.text};
    font-size: 1rem;
    padding: 0 1rem;

    &:hover {
      cursor: pointer;
      background: ${theme.grey.hover};
      border-color: ${border === "true" ? theme.success : theme.grey.hover};
    }

    & svg {
      margin-right: 0.5rem;
    }
  `
);

export const IconWrapper = styled(Box)`
  float: right;
  position: absolute;
  right: 2rem;
  line-height: 0;
  & svg {
    color: ${({ theme }: { theme: any }) => theme.grey.text}
  }

  &:hover {
    cursor: pointer;
  }
`;
