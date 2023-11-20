"use client";
import { signIn, signOut } from "next-auth/react";

export function Login() {
  return <button onClick={() => signIn("google")}>Login</button>;
}

export function Logout({ name }: ILogout) {
  return (
    <div className="space-x-2">
      <span>{name}, </span>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}

interface ILogout {
  name: string;
}
