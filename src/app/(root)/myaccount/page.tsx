import { RedirectType, redirect } from "next/navigation";
import AccountPage from "~/app/_components/account/account-page";
import { getServerAuthSession } from "~/server/auth";

export default async function MyAccountPage() {
  const session = await getServerAuthSession();
  if (!session) return redirect("/", RedirectType.replace);

  return (
    <section id="page">
      <AccountPage id={session.user.id} />
    </section>
  );
}
