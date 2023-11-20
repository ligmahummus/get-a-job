import Link from "next/link";
import AuthenticationStatus from "./authentication-status";

export default function NavigationBar() {
  return (
    <nav className="p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">GET-A-JOB</h1>
        </Link>
        <AuthenticationStatus />
      </div>
    </nav>
  );
}
