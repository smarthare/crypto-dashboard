import { Box, TableCell, TableRow, styled } from "@mui/material";

export const StyledBoardRow = styled(TableRow)`
  height: 50px;

  &:hover {
    background: ${({ theme }: { theme: any }) => theme.palette.button.hover};
    cursor: pointer;
  }
`;

export const StyledBoardCell = styled(TableCell)`
  height: 50px;
  padding: 3px 10px !important;
`;

export const StyledCoinName = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledCoinImage = styled(Box)`
  display: flex;
  align-items: center;
  width: 150px;

  & img {
    border-radius: 50%;
    margin-right: 5px;
  }
`;
