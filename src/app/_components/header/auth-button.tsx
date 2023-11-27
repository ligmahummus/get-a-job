"use client";
import { signIn, signOut } from "next-auth/react";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import { UserRole } from "~/server/auth";

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
  return (
    <div className="flex items-center justify-center gap-6">
      {role === "ADMIN" || role === "RECRUITER" ? (
        <Link href="/job/new">
          <button className="flex items-center gap-2 rounded-lg border-[1px] border-slate-700/20 px-2 py-1 text-sm text-slate-600 duration-150 ease-in-out hover:bg-slate-600 hover:text-white">
            <FaPlus />
            Add New Post
          </button>
        </Link>
      ) : (
        ""
      )}
      <div className="flex items-center space-x-2">
        {role !== "USER" ? (
          <span className="rounded-md bg-slate-800 px-2 py-1 text-[0.6rem] font-bold text-white">
            {role}
          </span>
        ) : (
          ""
        )}
        <Link href={"/myaccount"}>
          <span>{name}, </span>
        </Link>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    </div>
  );
}

interface ILogout {
  name: string;
  role: UserRole;
}
