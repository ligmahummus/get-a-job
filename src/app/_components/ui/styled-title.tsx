"use client";

/**
 * Styled title component that displays a title with a line underneath, used for page titles.
 * @param title Title to display
 * @returns JSX.Element
 */
export default function StyledTitle({ title }: IStyledTitle) {
  return (
    <div id="title-top">
      <h1 className="std__header px-6 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h1>
      <div className="h-[10vh] max-h-[30px] w-full -translate-y-1/2 rounded-lg bg-slate-800/10"></div>
    </div>
  );
}

interface IStyledTitle {
  title: string;
}
