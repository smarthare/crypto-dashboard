import { Box, Toolbar, styled } from "@mui/material";

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
    border-bottom: 0.2rem solid ${theme.palette.button.border};
    color: ${theme.palette.button.text};
    font-size: 1rem;
    padding: 0 1rem;
    border-width: ${border};

    &:hover {
      cursor: pointer;
      background: ${theme.palette.button.hover};
      transition: all 0.3s;
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

  &:hover {
    cursor: pointer;
  }
`;
