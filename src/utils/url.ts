export const sparklineUrl = (url: string) =>
  `https://www.coingecko.com/coins/${
    url.split("/images/")[1].split("/")[0]
  }/sparkline`;

export const thumbImageUrl = (url: string) =>
  url.replace("/large/", "/thumb/");
