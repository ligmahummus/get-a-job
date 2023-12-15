import Link from "next/link";
import AuthenticationStatus from "./authentication-status";
import Image from "next/image";
import logo from "../../../../public/logo.png";

/**
 * Navigation bar for the application.
 * @returns JSX.Element
 */
export default function NavigationBar() {
  return (
    <nav className="p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <Image
            src={logo.src}
            alt="logo"
            width={100}
            height={50}
            className="relative cursor-pointer duration-300 ease-in-out hover:scale-110"
          />
        </Link>
        <AuthenticationStatus />
      </div>
    </nav>
  );
}
