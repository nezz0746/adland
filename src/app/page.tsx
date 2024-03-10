"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  isethAbi,
  useReadAdCommonOwnershipGetAllGroups,
  useReadSuperTokenBalanceOf,
} from "@/generated";
import { superfluidAddresses } from "@/lib/constants";
import { useSmartAccount } from "@/lib/pimlico";
import { useRouter } from "next/navigation";
import {
  Address,
  encodeFunctionData,
  formatEther,
  parseEther,
  zeroAddress,
} from "viem";
import { useBalance, useSendTransaction } from "wagmi";

export default function Home() {
  const { smartAccount } = useSmartAccount();

  const { data: balanceData } = useBalance({
    address: smartAccount?.account.address,

    query: {
      enabled: Boolean(smartAccount?.account.address),
      refetchInterval: 10000,
    },
  });

  const { data: ethXBalance } = useReadSuperTokenBalanceOf({
    address: superfluidAddresses[11155111].ethx,
    args: [smartAccount?.account?.address as Address],
    query: {
      enabled: Boolean(smartAccount?.account.address),
      refetchInterval: 10000,
    },
  });

  const { sendTransaction } = useSendTransaction({});

  const { push } = useRouter();

  const { data: adGroups } = useReadAdCommonOwnershipGetAllGroups({
    args: [BigInt(1), BigInt(10)],
    query: {
      select: (data) => {
        return data
          .filter((adGroup) => adGroup.beneficiary !== zeroAddress)
          .map((adGroup, index) => {
            return {
              id: 1 + index,
              beneficiary: adGroup.beneficiary,
              startListingId: adGroup.startListingId,
              endListingId: adGroup.endListingId,
              size: Number(adGroup.endListingId - adGroup.startListingId),
            };
          });
      },
    },
  });

  console.log({ adGroups });

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Your account and balance. Use the buttons to fund your account and
            upgrade your ETHx.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{smartAccount?.account.address}</p>
          <div className="flex flex-row justify-between">
            <p>{Number(formatEther(balanceData?.value ?? BigInt(0)))} ETH</p>
            <p>{Number(formatEther(ethXBalance ?? BigInt(0)))} ETHx</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <Button
            onClick={() => {
              if (!smartAccount?.account.address) return;
              sendTransaction({
                to: smartAccount?.account.address,
                value: parseEther("0.1"),
              });
            }}
          >
            Fund 0.1 ETH
          </Button>
          <div className="flex flex-row gap-2">
            <Button
              onClick={() => {
                if (!smartAccount?.account.address) return;
                smartAccount.sendTransaction({
                  to: superfluidAddresses[11155111].ethx,
                  value: parseEther("0.01"),
                  data: encodeFunctionData({
                    abi: isethAbi,
                    functionName: "upgradeByETH",
                    args: undefined,
                  }),
                });
              }}
            >
              Upgrade 0.01 ETHx
            </Button>
            <Button
              onClick={() => {
                if (!smartAccount?.account.address || !ethXBalance) return;
                smartAccount.sendTransaction({
                  to: superfluidAddresses[11155111].ethx,
                  // value: ethXBalance,
                  data: encodeFunctionData({
                    abi: isethAbi,
                    functionName: "downgradeToETH",
                    args: [ethXBalance],
                  }),
                });
              }}
            >
              Downgrade All
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Table>
        <TableCaption>All Perpetual Ad Groups.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Group ID</TableHead>
            <TableHead>Beneficiary</TableHead>
            <TableHead></TableHead>
            <TableHead className="text-right">Size</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {adGroups?.map(({ id, beneficiary, size }) => (
            <TableRow
              key={id}
              className="cursor-pointer"
              onClick={() => {
                push(`/group/${id}`);
              }}
            >
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>{beneficiary}</TableCell>
              <TableCell>{""}</TableCell>
              <TableCell className="text-right">{size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {adGroups?.reduce((acc, adGroup) => acc + adGroup.size, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
