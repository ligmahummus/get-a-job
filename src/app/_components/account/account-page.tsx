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
      <div className="flex justify-center p-4">
        <button
          onClick={toggle}
          className="block w-max rounded-xl bg-slate-800 px-4 py-2 font-bold text-white md:hidden"
        >
          Open Menu
        </button>
      </div>

      <div className="flex md:p-4 lg:p-8">
        <SideMenuMobile toggle={toggle} open={open} sectionKey={sectionKey} />
        <div className="hidden w-2/5 md:block">
          <SettingMenu sectionKey={sectionKey} />
        </div>
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
      } top-0 flex h-screen w-screen min-w-[20%] flex-col items-center justify-center bg-white text-2xl duration-300 ease-in-out md:hidden`}
    >
      <SettingMenu sectionKey={sectionKey} />
      <button onClick={toggle} className="absolute right-14 top-14 text-4xl">
        &#x2715;
      </button>
    </aside>
  );
}

function SettingMenu({ sectionKey }: { sectionKey: SectionType }) {
  return (
    <ul className="flex flex-col gap-4 p-2">
      {Object.keys(SectionType).map((key) => (
        <li
          key={key}
          className={`duration-300 ease-in-out hover:text-slate-700 md:text-xl ${
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
