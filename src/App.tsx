import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";

import Layout from "components/Layout";
import Board from "components/Pages/Board";
import Chart from "components/Pages/Chart";
import Wallet from "components/Pages/Wallet";
import { AppProvider } from "contexts/AppContext";
import { PriceProvider } from "contexts/PriceContext";
import { ComponentEnum } from "types/common";
import { WalletProvider } from "contexts/WalletContext";

const routes = [
  {
    type: ComponentEnum.BOARD,
    path: "/",
    element: <Board />,
  },
  {
    type: ComponentEnum.CHART,
    path: "/chart/:coinId",
    element: <Chart />,
  },
  {
    type: ComponentEnum.WALLET,
    path: "/wallet",
    element: <Wallet />,
  },
];

const App = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <PriceProvider>
        <WalletProvider>
          <BrowserRouter>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={`route-${route.type}`}
                  path={route.path}
                  element={<Layout type={route.type} element={route.element} />}
                />
              ))}
            </Routes>
          </BrowserRouter>
          <ToastContainer />
        </WalletProvider>
      </PriceProvider>
    </AppProvider>
  );
};

export default App;
