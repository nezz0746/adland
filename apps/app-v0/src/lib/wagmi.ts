import { alchemyUrlByChain, initialChain } from "./constants";
import { localhost, optimismSepolia, sepolia } from "viem/chains";
import { http } from "viem";
import { createConfig } from "wagmi";

export const config = createConfig({
  chains: [localhost, initialChain],
  transports: {
    [localhost.id]: http(`http://localhost:8545`),
    [sepolia.id]: http(alchemyUrlByChain[sepolia.id]),
    [optimismSepolia.id]: http(alchemyUrlByChain[optimismSepolia.id]),
  },
  ssr: true,
});
