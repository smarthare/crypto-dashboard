import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material";

import { AssetType } from "types/crypto";
import { sparklineUrl } from "utils/url";
import { usdForamt } from "utils/currency";
import CoinName from "./CoinName";

import { StyledBoardCell, StyledBoardRow } from "./styles";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  price: AssetType;
};

const BoardRow = ({ price }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chart/${price.id}`);
  };

  return (
    <StyledBoardRow onClick={handleClick} theme={theme}>
      <StyledBoardCell>{price.market_cap_rank}</StyledBoardCell>
      <StyledBoardCell>
        <CoinName name={price.name} symbol={price.symbol} image={price.image} />
      </StyledBoardCell>
      <StyledBoardCell>{usdForamt(price.current_price, true)}</StyledBoardCell>
      <StyledBoardCell>{usdForamt(price.total_volume)}</StyledBoardCell>
      <StyledBoardCell>{usdForamt(price.market_cap)}</StyledBoardCell>
      <StyledBoardCell>
        <LazyLoadImage
          alt={`7d-chart-${price.id}`}
          src={sparklineUrl(price.image)}
          height={40}
          effect="blur"
        />
      </StyledBoardCell>
    </StyledBoardRow>
  );
};

export default BoardRow;
