import { getServerAuthSession } from "~/server/auth";
import { Login, Logout } from "./auth-button";

/**
 * Manages the display of authentication button at the navigation bar.
 * @returns JSX.Element
 */
export default async function AuthenticationStatus() {
  const session = await getServerAuthSession();
  return session?.user ? <Logout name={session.user.name ?? ""} /> : <Login />;
}
