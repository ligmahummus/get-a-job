import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import HeroWithSearch from "./_components/header/hero/hero-with-search";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <HeroWithSearch />
      <section></section>
    </>
  );
}
