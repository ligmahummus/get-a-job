"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import AccountPageLoadingComponent from "./account-page-loading-component";
import AccountHeader from "./account-header";
import AccountInfoContainer from "./account-info-container";

export default function AccountPage({ id }: IAccountPage) {
  const account = api.account.getAccountById.useQuery(id);
  const router = useRouter();
  if (account.isLoading) return <AccountPageLoadingComponent />;
  if (account.error ?? !account.data) router.replace("/");

  return (
    <>
      <AccountHeader name={account.data!.displayName} />
      <AccountInfoContainer account={account.data!} />
    </>
  );
}

interface IAccountPage {
  id: string;
}
