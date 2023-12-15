"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { UserRole } from "~/server/auth";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

const menuLinks: MenuLink[] = [
  {
    label: "My Account",
    href: "/myaccount",
  },
  {
    label: "My Jobs",
    href: "/myjobs",
  },
  {
    label: "Settings",
    href: "/myaccount?page=settings",
  },
];

const roleBasedLinks: MenuLink[] = [
  {
    label: "Admin Dashboard",
    href: "/admin",
    role: ["ADMIN"],
  },
  {
    label: "Manage Users",
    href: "/admin/manageusers",
    role: ["ADMIN"],
  },
  {
    label: "Create Job",
    href: "/createjob",
    role: ["RECRUITER", "ADMIN"],
  },
  {
    label: "Manage Jobs",
    href: "/managejobs",
    role: ["RECRUITER", "ADMIN"],
  },
  {
    label: "Manage Organization",
    href: "/org/manage",
    role: ["RECRUITER", "ADMIN"],
  },
];

/**
 * Menu for authenticated users, manages the display of role based menu items.
 * @returns JSX.Element
 */
export default function AuthenticatedMenu({
  children,
  role,
}: IAuthenticatedMenu) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative">
        {isMenuOpen ? <AccountMenu role={role} toggle={toggle} /> : ""}
        <button
          onClick={toggle}
          className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 duration-150 ease-in-out hover:bg-gray-100"
        >
          {children}
          <div
            className={`${
              isMenuOpen ? "rotate-180" : ""
            } duration-150 ease-in-out`}
          >
            <IoMdArrowDropdown />
          </div>
        </button>
      </div>
    </>
  );
}

/**
 * Menu for authenticated users, manages the display of role based menu items.
 * @returns JSX.Element
 */
function AccountMenu({ role, toggle }: IAccountMenu) {
  return (
    <aside className="absolute right-10 top-10 z-[999] min-h-max rounded-lg border-[1px] border-gray-100 bg-white shadow-lg lg:right-3 xl:right-auto">
      <ul className="flex flex-col whitespace-nowrap">
        {menuLinks.map((link) => (
          <Link
            role="listitem"
            href={link.href}
            onClick={toggle}
            className="cursor-pointer px-6 py-4 duration-150 ease-in-out hover:bg-gray-100"
          >
            {link.label}
          </Link>
        ))}
        <hr />
        {roleBasedLinks.map((link) =>
          link.role && link.role.includes(role) ? (
            <Link
              onClick={toggle}
              role="listitem"
              key={link.href}
              href={link.href}
              className="cursor-pointer px-6 py-4 duration-150 ease-in-out hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ) : (
            ""
          ),
        )}
        <hr />
        <button
          role="listitem"
          onClick={() => signOut()}
          className="my-2 rounded-lg px-6 py-2 text-left duration-150 ease-in-out hover:bg-red-500 hover:text-white"
        >
          Logout
        </button>
      </ul>
    </aside>
  );
}

interface IAccountMenu {
  role: UserRole;
  toggle: () => void;
}

interface IAuthenticatedMenu {
  children: React.ReactNode;
  role: UserRole;
}

type MenuLink = {
  label: string;
  href: string;
  role?: UserRole[];
};
