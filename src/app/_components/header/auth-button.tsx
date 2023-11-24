"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

/**
 * Login button that redirects to google auth
 * @returns JSX.Element
 */
export function Login() {
  return <button onClick={() => signIn("google")}>Login</button>;
}

/**
 * Logout button that manages the termination of the session
 * @returns JSX.Element
 */
export function Logout({ name }: ILogout) {
  return (
    <Link className="space-x-2" href={"/myaccount"}>
      <span>{name}, </span>
      <button onClick={() => signOut()}>Logout</button>
    </Link>
  );
}

interface ILogout {
  name: string;
}
