import { RedirectType, redirect } from "next/navigation";
import AccountHeader from "~/app/_components/account/account-header";
import AccountPage from "~/app/_components/account/account-page";
import { getServerAuthSession } from "~/server/auth";

export default async function MyAccountPage() {
  const session = await getServerAuthSession();
  if (!session) return redirect("/", RedirectType.replace);

  return (
    <section id="page">
      <AccountHeader
        name={session.user.name ?? ""}
        image={session.user.image ?? ""}
      />
      <AccountPage id={session.user.id} />
    </section>
  );
}
