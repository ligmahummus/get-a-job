"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import AccountPageLoadingComponent from "./account-page-loading-component";
import AccountHeader from "./account-header";
import AccountInfoContainer from "./account-info-container";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AccountPage({ id }: IAccountPage) {
  const [sectionKey, setSectionKey] = useState<SectionType>(
    SectionType.PERSONAL,
  );
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (page && Object.keys(SectionType).includes(page.toUpperCase())) {
      setSectionKey(
        SectionType[page.toUpperCase() as keyof typeof SectionType],
      );
    }
  }, [page]);

  console.log(sectionKey);

  const sections: {
    [key in SectionType]?: Section;
  } = {
    [SectionType.PERSONAL]: {
      title: SectionType.PERSONAL,
      fields: [
        {
          label: "Display Name",
          key: "displayName",
          type: "text",
        },
        {
          label: "Phone Number",
          key: "phone",
          type: "number",
        },
        {
          label: "Bio",
          key: "bio",
          type: "textarea",
        },
      ],
    },
    [SectionType.LOCATION]: {
      title: SectionType.LOCATION,
      fields: [
        {
          label: "Country",
          key: "country",
          type: "text",
        },
        {
          label: "State",
          key: "state",
          type: "text",
        },
        {
          label: "City",
          key: "city",
          type: "text",
        },
      ],
    },
    [SectionType.SETTINGS]: {
      title: SectionType.SETTINGS,
      fields: [
        {
          label: "Email",
          key: "email",
          type: "text",
        },
        {
          label: "Password",
          key: "password",
          type: "password",
        },
      ],
    },
  };

  const account = api.account.getAccountById.useQuery(id);
  const router = useRouter();
  if (account.isLoading) return <AccountPageLoadingComponent />;
  if (account.error ?? !account.data) router.replace("/");

  return (
    <>
      <AccountHeader name={account.data!.displayName} />
      <div className="flex p-8">
        <aside className="min-w-[20%]">
          <ul className="flex flex-col gap-4">
            {Object.keys(SectionType).map((key) => (
              <li
                key={key}
                className={`duration-300 ease-in-out hover:text-slate-700 ${
                  SectionType[key as keyof typeof SectionType] === sectionKey
                    ? "font-bold"
                    : ""
                }`}
              >
                <Link href={`/myaccount?page=${key.toLowerCase()}`}>
                  {SectionType[key as keyof typeof SectionType]}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <AccountInfoContainer
          section={sections[sectionKey]!}
          account={account.data!}
        />
      </div>
    </>
  );
}

enum SectionType {
  PERSONAL = "Personal Information",
  LOCATION = "Geographic Information",
  SETTINGS = "Settings",
}

export type Section = {
  title: SectionType;
  fields: {
    label: string;
    key: string;
    type: string;
  }[];
};

interface IAccountPage {
  id: string;
}
