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
 * @param {Object} props
 * @property {String} props.name - The name of the user
 * @property {String} props.id - The id of the user
 * @returns JSX.Element
 */
export function Logout({ name, id }: ILogout) {
  return (
    <Link className="space-x-2" href={`/profile/${id}`}>
      <span>{name}, </span>
      <button onClick={() => signOut()}>Logout</button>
    </Link>
  );
}

interface ILogout {
  name: string;
  id: string;
}
