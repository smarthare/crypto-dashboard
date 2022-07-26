import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";

import Layout from "components/Layout";
import Board from "components/Board";
import Chart from "components/Chart";
import { AppProvider } from "contexts/AppContext";
import { PriceProvider } from "contexts/PriceContext";
import { ComponentEnum } from "types/common";

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
];

const App = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <PriceProvider>
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
      </PriceProvider>
    </AppProvider>
  );
};

export default App;
