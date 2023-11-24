"use client";
export default function AccountHeader({ name }: IProfileHeader) {
  return (
    <>
      <h1 className="relative ml-12 translate-y-1/2 text-6xl font-extrabold text-slate-950 md:mb-2 md:text-7xl lg:text-8xl">
        {name.split(" ")[0]}
      </h1>
      <article className="flex flex-row-reverse rounded-xl bg-orange-200 p-6">
        <button>do this</button>
      </article>
    </>
  );
}

interface IProfileHeader {
  name: string;
}
