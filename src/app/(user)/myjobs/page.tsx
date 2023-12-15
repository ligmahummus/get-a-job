import { RedirectType, redirect } from "next/navigation";
import StyledTitle from "~/app/_components/ui/styled-title";
import { getServerAuthSession } from "~/server/auth";

/**
 * MyJobs page for the user to view it's saved jobs.
 * @returns JSX.Element
 */
export default async function MyJobs() {
  const session = await getServerAuthSession();
  if (!session) return redirect("/", RedirectType.replace);

  return (
    <section id="page">
      <StyledTitle title="My Jobs" />
      <input type="text" />
      <article>
        <div>
          <h1>title</h1>
          <p>job</p>
        </div>
      </article>
    </section>
  );
}
