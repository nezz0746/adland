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
  useReadAdCommonOwnershipGetAllGroups,
  useReadCfAv1ForwarderGetAccountFlowrate,
  useReadSuperTokenBalanceOf,
  useWriteIsethDowngradeToEth,
  useWriteIsethUpgradeByEth,
} from "@/generated";
import useAppContracts from "@/hooks/useAppContracts";
import FlowingBalance from "@/lib/superfluid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatEther, parseEther, zeroAddress } from "viem";
import { useAccount, useBalance } from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const { ethx, cfaV1 } = useAppContracts();

  const { data: balanceData } = useBalance({
    address,
    query: {
      enabled: Boolean(address),
    },
  });

  const { data: ethXBalance } = useReadSuperTokenBalanceOf({
    address: ethx,
    args: address && [address],
    query: {
      enabled: Boolean(address),
    },
  });

  const { data: accountFlowRate, dataUpdatedAt } =
    useReadCfAv1ForwarderGetAccountFlowrate({
      address: cfaV1,
      args: address && [ethx, address],
      query: {
        enabled: Boolean(address),
      },
    });

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

  const { writeContract: upgradeByEth } = useWriteIsethUpgradeByEth();
  const { writeContract: downgradeToEth } = useWriteIsethDowngradeToEth();

  return (
    <>
      {/* <Card>
        <CardHeader>
          <CardTitle>Account: {address}</CardTitle>
          <CardDescription>
            Your account and balance. Use the buttons to fund your account and
            upgrade your ETHx.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row justify-between">
            <p>
              <span>Balance: </span>
              {Number(formatEther(balanceData?.value ?? BigInt(0)))} ETH
            </p>
            <div className="flex flex-roww gap-2">
              <span>Balance: </span>
              {accountFlowRate !== undefined && ethXBalance !== undefined && (
                <FlowingBalance
                  startingBalance={ethXBalance}
                  startingBalanceDate={new Date(dataUpdatedAt)}
                  flowRate={accountFlowRate}
                />
              )}{" "}
              ETHx
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-end">
          <div className="flex flex-row gap-2">
            <Button
              onClick={() => {
                if (!address) return;

                upgradeByEth({
                  address: ethx,
                  args: undefined,
                  value: parseEther("0.01"),
                });
              }}
            >
              Upgrade 0.01 ETHx
            </Button>
            <Button
              onClick={() => {
                if (!ethXBalance) return;

                downgradeToEth({
                  address: ethx,
                  args: [ethXBalance],
                });
              }}
            >
              Downgrade All
            </Button>

          </div>
        </CardFooter>
      </Card> */}
      <Card>
        <CardHeader>
          <CardTitle>Ad Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <Card>
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
          </Card>
        </CardContent>
        <CardFooter className="justify-end">
          <Button>
            <Link href="/create-ad">Create Ad Group</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
