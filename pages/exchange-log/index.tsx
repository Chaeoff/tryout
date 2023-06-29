import Head from "next/head";
import { Layout } from "../../components/Layout";

export const Page = () => {
  return (
    <>
      <Head>
        <title>alocados | 거래내역</title>
        <meta name="description" content="알로카도스 거래내역 페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex h-auto w-20 items-center justify-center rounded-lg bg-blue-300">
          페이지
        </div>
      </Layout>
    </>
  );
};

export default Page;
