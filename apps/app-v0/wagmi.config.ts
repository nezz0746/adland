import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { getFoundryDeployments } from "./wagmi.helpers";
import { erc721Abi } from "viem";

export default defineConfig(async () => {
  const deployments = await getFoundryDeployments();

  return {
    out: "src/generated.ts",
    contracts: [
      {
        abi: erc721Abi,
        name: "ERC721",
      },
    ],
    plugins: [
      foundry({
        artifacts: "./foundry/out",
        deployments,
        include: [
          "DirectListingsLogic.sol/*.json",
          "AdCommonOwnership.sol/*.json",
          "SuperToken.sol/*.json",
          "ISETH.sol/*.json",
          "CFAv1Forwarder.sol/*.json",
        ],
      }),
      react({}),
    ],
  };
});
