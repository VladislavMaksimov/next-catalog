import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGetUsers } from "../backend/hooks/useGetUsers";
import { UsersTable } from "../widgets/UsersTable/UsersTable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { users, isLoading, isSuccess, isError, error } = useGetUsers();
  useEffect(() => {
    if (isError && error instanceof Error) toast.error(error.message);
  }, [error, isError]);
  return (
    <>
      <Head>
        <title>Next catalog</title>
      </Head>
      <header className="p-4 border-bottom">
        <h1>Next Catalog</h1>
      </header>
      <main className="p-4">{users && <UsersTable users={users} />}</main>
    </>
  );
}
