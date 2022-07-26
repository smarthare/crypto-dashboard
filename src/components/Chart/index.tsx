import { useParams } from "react-router-dom";
import Candlestick from "react-apexcharts";

import useMarketData from "hooks/useMarketData";

import { StyledBox } from "components/Chart/style";

const Chart = () => {
  const { coinId = "" } = useParams();
  const marketData = useMarketData(coinId);

  return (
    <StyledBox>
      {marketData ? (
        <Candlestick
          type="candlestick"
          height={"100%"}
          width="100%"
          series={[{ data: marketData }]}
          options={{
            chart: {
              toolbar: { show: false },
            },
            tooltip: { enabled: false },
            yaxis: {
              axisTicks: { show: false },
              max: Math.max(...marketData.map((item) => item[1])),
            },
            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
            },
          }}
        />
      ) : (
        <p>None</p>
      )}
    </StyledBox>
  );
};

export default Chart;
