import banner from "../../../../../public/hero-banner.jpg";

/**
 * Main banner for the application homepage.
 * @returns JSX.Element
 */
export default function Hero() {
  return (
    <section
      className="h-[340px] w-auto overflow-hidden rounded-xl bg-gray-800 text-white md:rounded-2xl lg:rounded-3xl"
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundClip: "border-box",
        backgroundPositionY: "70%",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-7 bg-transparent">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Find a job, Today!
        </h1>
        <p className="mx-auto max-w-md text-center font-light md:max-w-2xl md:text-[1rem] lg:max-w-4xl lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptatibus natus nam amet, dolore eaque magni culpa ipsam
          consequuntur a, mollitia quia exercitationem temporibus. Quas
          repellendus perspiciatis magni corrupti cupiditate!
        </p>
      </div>
    </section>
  );
}
