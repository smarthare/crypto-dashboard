import { TableContainer, styled } from "@mui/material";

export const StyledBoard = styled(TableContainer)`
  border: 1px solid ${({ theme }: { theme: any }) => theme.grey.border};
  border-radius: 0.5rem;
  overflow: auto;
`;
