import JobBody from "~/app/_components/job/post/job-body";
import JobHeader from "~/app/_components/job/post/job-header";
import JobPoster from "~/app/_components/job/post/job-poster";

export default function JobPage({ params: { jobSlug } }: IJobPage) {
  console.log(jobSlug);
  return (
    <section id="page">
      <JobHeader />
      <div className="flex flex-col p-4 lg:flex-row">
        <JobBody />
        <JobPoster />
      </div>
    </section>
  );
}

interface IJobPage {
  params: {
    jobSlug: string;
  };
}
