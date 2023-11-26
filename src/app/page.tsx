import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import HeroWithSearch from "./_components/header/hero/hero-with-search";
import LastJobsCarousel from "./_components/ui/last-jobs-carousel";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <HeroWithSearch />
      <LastJobsCarousel />
      <section></section>
    </>
  );
}
