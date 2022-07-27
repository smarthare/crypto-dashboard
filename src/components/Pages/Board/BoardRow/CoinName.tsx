import { thumbImageUrl } from "utils/url";

import { StyledCoinName, StyledCoinImage } from "./styles";

const CoinName = ({
  name,
  image,
  symbol,
}: {
  name: string;
  symbol: string;
  image: string;
}) => {
  return (
    <StyledCoinName component="span">
      <StyledCoinImage component="span">
        <img src={thumbImageUrl(image)} alt={name} />
        {name}
      </StyledCoinImage>
      {symbol.toLocaleUpperCase()}
    </StyledCoinName>
  );
};

export default CoinName;
