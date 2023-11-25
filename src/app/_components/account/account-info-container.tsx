"use client";
import { type RouterOutputs } from "~/trpc/shared";
import { Section } from "./account-page";
import { FormEvent, useState } from "react";

export default function AccountInfoContainer({
  account,
  section,
}: IAccountInfoContainer) {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  if (!account) return <></>;
  return (
    <>
      <section id="page" className="flex w-full flex-col gap-6">
        <form
          id="section"
          className="flex flex-col gap-12"
          onSubmit={handleSubmit}
        >
          <h1 className="border-b-2 border-b-slate-800/10 text-lg font-bold md:text-2xl lg:text-3xl">
            {section.title}
          </h1>
          <article className="grid grid-flow-row grid-cols-2 gap-12 p-6">
            {section.fields.map((field) => (
              <div
                className={`space-y-2 ${
                  field.type === "textarea" ? "col-span-2" : ""
                }`}
              >
                <label className="font-bold" htmlFor={field.key}>
                  {field.label}
                </label>
                {field.type !== "textarea" ? (
                  <input
                    readOnly={submitting}
                    className="w-full rounded-md border border-slate-800/10 p-2 read-only:bg-gray-50 read-only:text-gray-400"
                    id={field.key}
                    type={field.type}
                    defaultValue={
                      account[field.key as keyof typeof account] as string
                    }
                  />
                ) : (
                  <textarea
                    readOnly={submitting}
                    className="w-full rounded-md border border-slate-800/10 p-2 read-only:bg-gray-50 read-only:text-gray-400"
                    defaultValue={
                      account[field.key as keyof typeof account] as string
                    }
                  />
                )}
              </div>
            ))}
          </article>
          <button
            className="mx-auto rounded-md bg-slate-800 px-4 py-2 font-bold text-white"
            type="submit"
          >
            {submitting ? "Submitting..." : "Update Profile"}
          </button>
        </form>
      </section>
    </>
  );
}

interface IAccountInfoContainer {
  account: RouterOutputs["account"]["getAccountById"];
  section: Section;
}
