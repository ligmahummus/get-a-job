"use client";
import Image from "next/image";

export default function AccountHeader({ name, image }: IProfileHeader) {
  return (
    <>
      <div className="relative flex flex-col items-center px-12 md:mb-2 md:translate-y-1/2 md:flex-row-reverse md:justify-between md:gap-5">
        <Image
          className="rounded-full"
          src={image ?? ""}
          width={100}
          height={100}
          alt={`${name}'s image`}
        />

        <h1 className="text-6xl font-extrabold text-slate-950 md:text-7xl lg:text-8xl">
          {name.split(" ")[0]}
        </h1>
      </div>
      <article className="flex flex-row-reverse rounded-xl bg-slate-200 p-6"></article>
    </>
  );
}

interface IProfileHeader {
  name: string;
  image?: string;
}
