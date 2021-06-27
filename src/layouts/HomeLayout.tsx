import Head from "next/head";
import { HomeLayoutProps, UserProvider } from "app";

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <main>{children}</main>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px;
        }
      `}</style>
    </>
  );
}
