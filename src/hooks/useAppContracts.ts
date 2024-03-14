import {
  adCommonOwnershipAddress,
  directListingsLogicAddress,
} from "@/generated";
import {
  AppChainIds,
  initialChain,
  superfluidAddresses,
} from "@/lib/constants";

const useAppContracts = () => {
  const appChain = initialChain;

  return {
    ethx: superfluidAddresses[appChain.id as AppChainIds].ethx,
    daix: superfluidAddresses[appChain.id as AppChainIds].daix,
    cfaV1: superfluidAddresses[appChain.id as AppChainIds].cfaV1,
    marketplace: directListingsLogicAddress[appChain.id as AppChainIds],
    adCommonOwnership: adCommonOwnershipAddress[appChain.id as AppChainIds],
  };
};

export default useAppContracts;
