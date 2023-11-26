"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import AccountPageLoadingComponent from "./account-page-loading-component";
import AccountHeader from "./account-header";
import AccountInfoContainer from "./account-info-container";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AccountPage({ id }: IAccountPage) {
  const [open, setOpen] = useState<boolean>(false);
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

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AccountHeader name={account.data!.displayName} />
      <div className="flex justify-center p-4">
        <button
          onClick={toggle}
          className="w-max rounded-xl bg-slate-800 px-4 py-2 font-bold text-white"
        >
          Open Menu
        </button>
      </div>
      <div className="flex md:p-8">
        <SideMenuMobile toggle={toggle} open={open} sectionKey={sectionKey} />
        <AccountInfoContainer
          section={sections[sectionKey]!}
          account={account.data!}
        />
      </div>
    </>
  );
}

function SideMenuMobile({
  sectionKey,
  open,
  toggle,
}: {
  sectionKey: SectionType;
  open: boolean;
  toggle: () => void;
}) {
  return (
    <aside
      className={`fixed bottom-0 ${
        open ? "left-0 right-0" : "-left-[100vw] right-[100vw]"
      } top-0 flex h-screen w-screen min-w-[20%] flex-col items-center justify-center bg-white text-2xl duration-300 ease-in-out`}
    >
      <SettingMenu sectionKey={sectionKey} />
      <button onClick={toggle}>Close</button>
    </aside>
  );
}

function SettingMenu({ sectionKey }: { sectionKey: SectionType }) {
  return (
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
