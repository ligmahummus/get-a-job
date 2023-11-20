import { getServerAuthSession } from "~/server/auth";
import { Login, Logout } from "./auth-button";

export default async function AuthenticationStatus() {
  const session = await getServerAuthSession();
  return session?.user ? (
    <Logout name={session.user.name ?? "John Doe"} />
  ) : (
    <Login />
  );
}
