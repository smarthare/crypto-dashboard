import { useTheme } from "@mui/material";

import { StyledButton } from "./styles";

const CustomButton = ({
  size,
  children,
  onClick,
}: {
  size: "sm" | "lg";
  children: React.ReactNode;
  onClick: () => {};
}) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
