import { RedirectType, redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function NewPostPage() {
  const session = await getServerAuthSession();

  // We only allow ADMIN and RECRUITER to access this page
  if (!session || session.user.role === "USER")
    return redirect("/", RedirectType.replace);

  return <section id="page">new post page</section>;
}
