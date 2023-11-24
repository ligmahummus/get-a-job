"use client";
import { type RouterOutputs } from "~/trpc/shared";

export default function AccountInfoContainer({
  account,
}: IAccountInfoContainer) {
  const sections: Section[] = [
    {
      title: SectionType.PERSONAL,
      fields: [],
    },
  ];

  return (
    <>
      <section id="page" className="mt-14 flex flex-col gap-6">
        <div id="section">
          <h1 className="border-b-2 border-b-slate-800/10 text-lg font-bold md:text-2xl lg:text-3xl">
            Personal Information
          </h1>
          <article></article>
        </div>
      </section>
    </>
  );
}

enum SectionType {
  PERSONAL = "Personal Information",
  LOCATION = "Geographic Information",
  SETTINGS = "Settings",
}

type Section = {
  title: SectionType;
  fields: {
    label: string;
    value: string;
    type: string;
  }[];
};

interface IAccountInfoContainer {
  account: RouterOutputs["account"]["getAccountById"];
}
