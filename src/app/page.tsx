"use client";

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
import { useRouter } from "next/navigation";
import { zeroAddress } from "viem";

export default function Home() {
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
