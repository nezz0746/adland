"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";

const GroupDistributionPage = () => {
  const { user, linkFarcaster } = usePrivy();
  const [channelName, setChannelName] = useState("");

  const signedInWithFarcaster = Boolean(user?.farcaster);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Farcaster Channel Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Channel Name"
          />
        </CardContent>
        <CardFooter className="gap-2">
          <Button
            disabled={signedInWithFarcaster}
            className="gap-2"
            onClick={() => {
              if (!signedInWithFarcaster) linkFarcaster();
            }}
          >
            <img
              src={
                signedInWithFarcaster
                  ? user?.farcaster?.pfp ?? "/farcaster.png"
                  : "/farcaster.png"
              }
              width={20}
              height={20}
              alt="farcaster logo"
            />
            {signedInWithFarcaster
              ? user?.farcaster?.username
              : "Sign in with Farcaster"}
          </Button>
          <Button disabled={!signedInWithFarcaster}>Publish Ads</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GroupDistributionPage;
