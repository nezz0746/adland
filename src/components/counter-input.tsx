import useCounter from "@/lib/counter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useSmartAccount } from "@/lib/pimlico";

const CounterInput = () => {
  const { smartAccount } = useSmartAccount();
  const { writeCounter, isPending } = useCounter();
  const [numberInputValue, setNumberInputValue] = useState(0);

  const setNumber = () => {
    writeCounter({
      functionName: "setNumber",
      args: [BigInt(numberInputValue)],
    });
  };

  const ready = smartAccount !== null;

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="number"
        placeholder="New number"
        autoComplete="off"
        min={0}
        step={1}
        onChange={(e) => {
          setNumberInputValue(e.target.valueAsNumber);
        }}
      />
      <Button disabled={isPending || !ready} type="submit" onClick={setNumber}>
        {isPending && <ReloadIcon className="w-4 h-4 animate-spin mr-1" />}
        Set Number
      </Button>
    </div>
  );
};

export default CounterInput;
