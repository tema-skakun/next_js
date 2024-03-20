import {AppProps} from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.scss";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};
