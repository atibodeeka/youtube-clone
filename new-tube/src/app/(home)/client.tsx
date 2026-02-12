"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Dodo",
  });

  return <div>Page client {data.greeting}</div>;
};
