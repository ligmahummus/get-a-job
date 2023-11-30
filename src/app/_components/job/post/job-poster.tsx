export default function JobPoster() {
  return (
    <aside className="w-full border-t-2 border-l-slate-800/10 p-4 lg:w-2/5 lg:border-l-2 lg:border-t-0">
      <div className="">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
          JH
        </div>
        <h1 className="mx-2 inline-block font-bold">JobHunt</h1>
      </div>
      <div className="pl-4 pt-1 lg:pt-2">
        <p className="hyphens-auto text-justify indent-8 text-sm text-gray-500 lg:indent-4">
          JobHunt is a fin-tech organization located near Sarona Market in
          Tel-Aviv.
        </p>
      </div>
    </aside>
  );
}
