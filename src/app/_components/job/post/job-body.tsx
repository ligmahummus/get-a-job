export default function JobBody() {
  return (
    <article className="mb-12 w-full space-y-12">
      <SuitableFor />
      <PostSection />
      <PostSection />
      <PostSection />
      <PostSection />
      <PostSection />
    </article>
  );
}

function SuitableFor() {
  const suitableTags = [
    "Frontend",
    "Backend",
    "Fullstack",
    "DevOps",
    "Designer",
    "Manager",
    "Internship",
  ];

  return (
    <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-3 text-[0.7rem] md:text-[1rem]">
      {suitableTags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-slate-800/10 px-3 py-1 font-semibold text-slate-800"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function PostSection() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">About JobHunt:</h1>
      <p className="px-4 text-justify text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        dolorum minima tempore quasi pariatur laudantium numquam temporibus
        atque! Voluptatum consequuntur eaque similique vitae magnam aliquam,
        mollitia doloribus adipisci hic asperiores?
      </p>
    </div>
  );
}
