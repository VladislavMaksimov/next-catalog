import { Inter } from "next/font/google";
import Head from "next/head";

import { Users } from "../widgets/Users";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next catalog</title>
      </Head>
      <header className="p-4 border-bottom">
        <h1>Next Catalog</h1>
      </header>
      <Users />
    </>
  );
}
