import Image from "next/image";
import Layout from "../components/Layout";
import "@/styles/globals.scss";
import mainImg from "@/public/main.png";

export default function App({Component, pageProps}) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
      <Image
        src={mainImg}
        height={350}
        width={950}
        alt="preview"
        blurDataURL="data:..."
        placeholder="blur"
      />
    </Layout>
  );
};
