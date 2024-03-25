import { getExplorerLink, truncateAddress } from "@/lib/utils";
import Link from "next/link";
import { Address } from "viem";

const AccountLink = ({ address }: { address: Address }) => {
  return (
    <Link
      target="_blank"
      href={getExplorerLink(address, "address")}
      className="underline"
    >
      {truncateAddress(address)}
    </Link>
  );
};

export default AccountLink;
