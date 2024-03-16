import {
  useReadCfAv1ForwarderGetFlowOperatorPermissions,
  useWriteCfAv1ForwarderGrantPermissions,
} from "@/generated";
import useAppContracts from "@/hooks/useAppContracts";
import { useAccount } from "wagmi";
import { Button } from "./ui/button";

const StreamPermissionButton = () => {
  const { address } = useAccount();
  const { cfaV1, ethx, marketplace } = useAppContracts();

  const { data: permissionGrantedToMarketplace, isFetched } =
    useReadCfAv1ForwarderGetFlowOperatorPermissions({
      address: cfaV1,
      args: address && [ethx, address, marketplace],
      query: {
        enabled: Boolean(address),
        select: (data) => {
          console.log(data);
          return data[0] === 7;
        },
      },
    });

  const { writeContractAsync: callGrantPermission, isPending } =
    useWriteCfAv1ForwarderGrantPermissions();

  const grantPermission = () => {
    callGrantPermission({
      address: cfaV1,
      args: [ethx, marketplace],
    });
  };

  return (
    <>
      {" "}
      {!permissionGrantedToMarketplace && isFetched && (
        <Button
          disabled={isPending}
          onClick={() => {
            grantPermission();
          }}
        >
          Grant Permission
        </Button>
      )}
    </>
  );
};

export default StreamPermissionButton;
