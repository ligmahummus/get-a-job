import HeroWithSearch from "./_components/header/hero/hero-with-search";
import LastJobsCarousel from "./_components/ui/last-jobs-carousel";

export default async function Home() {
  return (
    <>
      <HeroWithSearch />
      <LastJobsCarousel />
      <section></section>
    </>
  );
}
