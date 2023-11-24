"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AccountPageLoadingComponent() {
  return (
    <section id="page" className="flex flex-col gap-20">
      <Skeleton className="h-16" />

      <SkeletonSection />
      <SkeletonSection />
    </section>
  );
}

function SkeletonSection() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <Skeleton className="mb-3 h-14" />
        <div className="flex gap-6">
          <SkeletonInfomration />
          <SkeletonInfomration />
        </div>
      </div>
    </>
  );
}

function SkeletonInfomration() {
  return <Skeleton containerClassName="w-1/2 flex flex-col gap-1" count={3} />;
}
