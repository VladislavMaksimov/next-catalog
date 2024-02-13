import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { useGetUsers } from "../backend/hooks/useGetUsers";
import { UsersTable } from "../widgets/UsersTable/UsersTable";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { users, isSuccess, isError, error } = useGetUsers();
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
      <main className="p-4">
        {isSuccess && users && <UsersTable users={users} />}
      </main>
    </>
  );
}
