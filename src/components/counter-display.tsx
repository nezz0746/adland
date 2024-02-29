import { counterAbi, counterAddress, useReadCounterNumber } from "@/generated";
import { useWatchContractEvent } from "wagmi";
import { CardDescription } from "./ui/card";
import { queryClient } from "@/app/providers";

const CounterDisplay = () => {
  const { data: number, queryKey } = useReadCounterNumber();

  useWatchContractEvent({
    abi: counterAbi,
    address: counterAddress[11155111],
    eventName: "NumberChanged",
    onLogs: (logs) => {
      const newNumber = logs[0].args.newNumber;

      queryClient.setQueryData(queryKey, newNumber);
    },
  });

  return (
    <div className="flex flex-col gap-1 items-center">
      <CardDescription>Value</CardDescription>
      <p className="text-3xl">{Number(number)}</p>
    </div>
  );
};

export default CounterDisplay;
