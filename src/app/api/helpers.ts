import { ipfsGateway } from "@/lib/constants";
import { Ad } from "@/lib/types";

export const formatAd = ({ uri }: Ad) => {
  const hash = uri.split("//")[1];

  return {
    uri,
    gatewayUri: hash ? ipfsGateway + "/" + hash : null,
  };
};

export const formatAds = (ads: Ad[]) => {
  return ads.map(formatAd);
};

export const fetchJSON = async (url: string) => {
  return fetch(url).then((res) => {
    return res.json();
  });
};
