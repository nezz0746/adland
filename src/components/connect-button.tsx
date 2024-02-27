import { ConnectButton as RKConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./ui/button";
import { useChains, useSwitchChain } from "wagmi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";

export const ConnectButton = () => {
  const chains = useChains();
  const { switchChain } = useSwitchChain();

  return (
    <RKConnectButton.Custom>
      {(props) => {
        console.log(props.account);
        const {
          account,
          chain,
          openAccountModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        } = props;
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Select
                    onValueChange={(v) => {
                      switchChain({ chainId: parseInt(v) });
                    }}
                  >
                    <SelectTrigger className="w-[170px]">
                      <SelectValue placeholder={"Wrong network"} />
                    </SelectTrigger>
                    <SelectContent>
                      {chains.map((chain) => (
                        <SelectItem value={chain.id.toString()} key={chain.id}>
                          {chain.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Select
                    defaultValue={chain.id.toString()}
                    onValueChange={(v) => {
                      switchChain({ chainId: parseInt(v) });
                    }}
                  >
                    <SelectTrigger className="w-[170px]">
                      {chain.iconUrl && (
                        <Image
                          src={chain.iconUrl}
                          alt={chain.name ?? "Chain Icon"}
                          width={16}
                          height={16}
                        />
                      )}
                      <SelectValue placeholder={chain.name} />
                    </SelectTrigger>
                    <SelectContent>
                      {chains.map((chain) => (
                        <SelectItem value={chain.id.toString()} key={chain.id}>
                          {chain.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    onClick={openAccountModal}
                    type="button"
                  >
                    {account.displayName}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </RKConnectButton.Custom>
  );
};
