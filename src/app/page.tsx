import Link from "next/link";

import Button from "~/app/_components/button";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Water <span className="text-[hsl(280,100%,70%)]">Sort</span> Puzzle
          </h1>
          <div className="flex flex-col items-center gap-2">
            <Link href="/game" className="text-white no-underline">
              <Button>
                Start Game
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
