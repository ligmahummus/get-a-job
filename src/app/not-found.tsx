export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center space-y-7">
      <h1 className="text-5xl font-bold text-slate-700">404</h1>
      <p className="max-w-xl text-3xl">
        We surely help you find your dream job!
        <br />
        but the resource you&apos;re trying to access to is{" "}
        <b>
          <i>unavailable</i>
        </b>{" "}
        or <b>does not exists</b>.
      </p>
    </section>
  );
}
