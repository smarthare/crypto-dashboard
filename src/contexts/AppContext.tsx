import { createContext, useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";
import { ThemeProvider } from "@mui/material";

import { IAppContext } from "types/context";
import { MessageContentType, MessageTypeEnum } from "types/common";
import { getThemeMode, setThemeMode, darkMode, lightMode } from "utils/theme";

const AppContext = createContext({
  message: {} as MessageContentType,
  theme: false,
  setMessage: () => {},
  changeTheme: () => {},
} as IAppContext);

function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<boolean>(getThemeMode());
  const [message, setMessage] = useState<MessageContentType>(
    {} as MessageContentType
  );

  const changeTheme = () => {
    setThemeMode(!theme);
    setTheme(!theme);
  };

  useEffect(() => {
    switch (message.type) {
      case MessageTypeEnum.SUCCESS:
        toast.success(message.text);
        break;
      case MessageTypeEnum.INFO:
        toast.info(message.text);
        break;
      case MessageTypeEnum.WARN:
        toast.warn(message.text);
        break;
      case MessageTypeEnum.ERROR:
        toast.error(message.text);
        break;
      default:
        toast(message.text);
        break;
    }
  }, [message]);

  return (
    <ThemeProvider theme={theme ? darkMode : lightMode}>
      <AppContext.Provider
        value={{
          message,
          theme,
          setMessage,
          changeTheme,
        }}
      >
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export { AppProvider, AppContext };
