import { Box, TableCell, TableRow, styled } from "@mui/material";

export const StyledBoardRow = styled(TableRow)`
  height: 3.5rem;

  &:hover {
    background: ${({ theme }: { theme: any }) => theme.grey.hover};
    cursor: pointer;
  }
`;

export const StyledBoardCell = styled(TableCell)`
  height: 3.5rem;
  padding: 0.2rem 1rem !important;
`;

export const StyledCoinName = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledCoinImage = styled(Box)`
  display: flex;
  align-items: center;
  width: 10rem;

  & img {
    border-radius: 50%;
    margin-right: 0.25rem;
  }
`;
