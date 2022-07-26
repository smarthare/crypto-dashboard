import { BeatLoader } from "react-spinners";
import { Theme, useTheme } from "@mui/material";

import { ThemeEnum } from "types/common";
import { LoadingWrapper } from "components/Loading/styles";

const Loading = () => {
  const theme: Theme = useTheme();

  return (
    <LoadingWrapper>
      <BeatLoader
        color={
          theme.palette.mode !== ThemeEnum.DARK
            ? theme.palette.info.light
            : theme.palette.info.dark
        }
      />
    </LoadingWrapper>
  );
};

export default Loading;
