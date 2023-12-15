"use client";
import { signIn } from "next-auth/react";
import { type UserRole } from "~/server/auth";
import AuthenticatedMenu from "./authenticated-menu";

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
export function Logout({ name, role }: ILogout) {
  return <AuthenticatedMenu role={role}>{name}</AuthenticatedMenu>;
}

interface ILogout {
  name: string;
  role: UserRole;
}
