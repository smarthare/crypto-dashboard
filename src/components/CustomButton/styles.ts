import { styled } from "@mui/material";

export const StyledButton = styled(`button`)`
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  background: ${({ theme }: { theme: any }) => theme.success};
  border: 0;
  border-radius: 0.5em;
  font-weight: 600;
  font-size: ${({ size, theme }: { size: "sm" | "lg"; theme: any }) =>
    size === "sm" ? 0.7 : 1}rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.palette.success.dark};
  }
`;
