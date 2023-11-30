import { FaRegCopy, FaWhatsapp, FaShare } from "react-icons/fa";
import JobLikeButton from "../ui/job-like-button";

export default function JobHeader() {
  return (
    <article id="job-header">
      <div className="flex flex-col-reverse items-center justify-between gap-6">
        <h1 className="std__header text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Software Developer
        </h1>
        <JobHeaderButtons />
      </div>
      <div className="h-[10vh] max-h-[30px] w-full -translate-y-1/2 rounded-lg bg-slate-800/10"></div>
    </article>
  );
}

function JobHeaderButtons() {
  return (
    <div className="lg:text-md flex w-full items-center justify-between text-2xl">
      <JobLikeButton />
      <ul className="flex w-full justify-end gap-3">
        <JobHeaderSingleButton>
          <FaRegCopy />
        </JobHeaderSingleButton>
        <JobHeaderSingleButton>
          <FaWhatsapp />
        </JobHeaderSingleButton>
        <JobHeaderSingleButton>
          <FaShare />
        </JobHeaderSingleButton>
      </ul>
    </div>
  );
}

function JobHeaderSingleButton({ children }: IJobHeaderSingleButton) {
  return (
    <li className="cursor-pointer rounded-full p-1 text-slate-800 duration-150 ease-in-out hover:bg-slate-700 hover:text-white">
      {children}
    </li>
  );
}
interface IJobHeaderSingleButton {
  children: React.ReactNode;
}
