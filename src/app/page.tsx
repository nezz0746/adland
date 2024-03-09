"use client";

import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
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
import { useReadAdCommonOwnershipGetAllGroups } from "@/generated";
import { zeroAddress } from "viem";

export default function Home() {
  const { data: adGroups } = useReadAdCommonOwnershipGetAllGroups({
    args: [BigInt(1), BigInt(10)],
    query: {
      select: (data) => {
        return data
          .filter((adGroup) => adGroup.beneficiary !== zeroAddress)
          .map((adGroup) => {
            return {
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
      <nav className="p-4 flex flex-row justify-between">
        <p className="text-xl font-bold">App</p>
        <ConnectButton />
      </nav>
      <Separator />
      <main className="p-4 flex flex-col gap-2">
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
            {adGroups?.map(
              ({ beneficiary, startListingId, endListingId, size }, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index}</TableCell>
                  <TableCell>{beneficiary}</TableCell>
                  <TableCell>{""}</TableCell>
                  <TableCell className="text-right">{size}</TableCell>
                </TableRow>
              )
            )}
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
      </main>
    </>
  );
}
