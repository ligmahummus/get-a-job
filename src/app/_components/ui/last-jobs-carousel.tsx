import Link from "next/link";
import CarouselWrapper from "./carousel/carousel-wrapper";

export default function LastJobsCarousel() {
  return (
    <section className="space-y-14 md:space-y-20">
      <div className="w-full">
        <h1 className="mx-auto w-max border-b-2 border-b-slate-500 text-2xl font-extrabold text-slate-700 md:text-4xl">
          Featured Jobs
        </h1>
      </div>
      <CarouselWrapper>
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
        <JobPost />
      </CarouselWrapper>
    </section>
  );
}

function JobPost() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl">
      <h1 className="top-0 text-center text-5xl font-extrabold text-slate-700 md:text-4xl lg:text-3xl">
        Software Developer
      </h1>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="font-bold text-gray-600 duration-150 ease-in-out hover:scale-[1.1]"
        >
          JobHunt
        </Link>
        <div className="text-gray-500">&#x2022;</div>
        <span className="text-gray-400">2 hours ago</span>
      </div>
      <Link href="/job/software-dev-job">
        <button className="w-max rounded-lg bg-slate-800 px-4 py-2 text-xl font-bold text-white duration-150 ease-in-out hover:scale-[1.1] md:text-lg lg:text-sm">
          View Job
        </button>
      </Link>
    </div>
  );
}
