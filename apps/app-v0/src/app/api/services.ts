import { alchemyUrlByChain, initialChain } from "@/lib/constants";
import { createPublicClient, http } from "viem";

const defaultChain = initialChain;

const client = createPublicClient({
  chain: defaultChain,
  transport: http(alchemyUrlByChain[defaultChain.id]),
});

export { client };
