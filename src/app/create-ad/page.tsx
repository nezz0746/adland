"use client";

import CreateAdGroupForm from "@/components/forms/create-ad-group";
import { useAccount } from "wagmi";

const CreateAdGroupPage = () => {
  const { address } = useAccount();

  return address && <CreateAdGroupForm beneficiary={address} />;
};

export default CreateAdGroupPage;
