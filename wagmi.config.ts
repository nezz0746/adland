import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { getFoundryDeployments } from "./wagmi.helpers";

export default defineConfig(async () => {
  const deployments = await getFoundryDeployments();

  return {
    out: "src/generated.ts",
    contracts: [],
    plugins: [
      foundry({
        project: "./foundry",
        deployments,
      }),
      react(),
    ],
  };
});
