import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import "@/styles/globals.scss";
import mainImg from "@/public/main.png";

export default function App({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image
        src={mainImg}
        height={350}
        width={950}
        alt="preview"
        placeholder="blur"
      />
    </Layout>
  );
};
