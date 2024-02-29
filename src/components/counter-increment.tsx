import { useSmartAccount } from "@/lib/pimlico";
import { Button } from "./ui/button";
import useCounter from "@/lib/counter";
import { ReloadIcon } from "@radix-ui/react-icons";

const CounterIncrement = () => {
  const { smartAccount } = useSmartAccount();
  const { writeCounter, isPending } = useCounter();

  const increment = () => {
    writeCounter({
      functionName: "increment",
    });
  };

  const ready = smartAccount !== null;

  return (
    <Button disabled={isPending || !ready} onClick={increment}>
      {isPending && <ReloadIcon className="w-4 h-4 animate-spin mr-1" />}
      Increment
    </Button>
  );
};

export default CounterIncrement;
