"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NATIVE_CURRENCY } from "@/lib/constants";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Address, formatEther, parseEther } from "viem";

const createAdGroupSchema = z.object({
  beneficiary: z.string(),
  currency: z.string(),
  initialPrice: z.bigint(),
  taxRate: z.bigint().max(BigInt(100000)),
  size: z.bigint(),
});

type CreateAdGroupFormValues = z.infer<typeof createAdGroupSchema>;

type CreateAdGroupFormProps = {
  beneficiary: Address;
};

const CreateAdGroupForm = ({ beneficiary }: CreateAdGroupFormProps) => {
  const form = useForm<CreateAdGroupFormValues>({
    resolver: zodResolver(createAdGroupSchema),
    defaultValues: {
      beneficiary,
      currency: NATIVE_CURRENCY,
      initialPrice: BigInt(1e16),
      taxRate: BigInt(10),
      size: BigInt(5),
    },
  });

  const onSubmit = (values: CreateAdGroupFormValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Create Ad Title</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="initialPrice"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Initial Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step={0.01}
                      defaultValue={Number(formatEther(value))}
                      onChange={(e) => {
                        const val = e.target.valueAsNumber;

                        if (!isNaN(val)) {
                          onChange(parseEther(val.toString()));
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    The initial price for the ad group. (ETH)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="taxRate"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Tax Rate</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step={0.01}
                      min={0}
                      defaultValue={Number(value) / 100}
                      onChange={(e) => {
                        const val = Math.fround(e.target.valueAsNumber * 100);

                        if (!isNaN(val)) {
                          onChange(BigInt(Math.round(val)));
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Percentage of price owed to the beneficiary, per week. (%)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      defaultValue={[Number(value)]}
                      onValueChange={(vals) => {
                        onChange(BigInt(vals[0]));
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    The amount of ad space in pixels:{" "}
                    <span className="font-bold text-lg">{Number(value)}</span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="justify-end">
            <Button type="submit">Create Ad Group</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default CreateAdGroupForm;
