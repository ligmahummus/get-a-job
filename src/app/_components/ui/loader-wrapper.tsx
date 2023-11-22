"use client";
import type { HTMLAttributes, ReactNode } from "react";

/**
 *  A loader wrapper to provide a css and component.
 * @returns JSX.Element
 */
const LoaderWrapper = ({
  loader,
  ...rest
}: ILoaderWrapper & HTMLAttributes<HTMLDivElement>) => {
  return <div {...rest}>{loader}</div>;
};

interface ILoaderWrapper {
  loader: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
}

export default LoaderWrapper;
