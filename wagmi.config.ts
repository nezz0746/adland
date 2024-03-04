import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { getFoundryDeployments } from "./wagmi.helpers";

export default defineConfig(async () => {
  const deployments = await getFoundryDeployments();

  return {
    out: "src/generated.ts",
    plugins: [
      foundry({
        artifacts: "./foundry/out",
        deployments,
        include: ["DirectListingsLogic.sol/*.json"],
      }),
      react({}),
    ],
  };
});
