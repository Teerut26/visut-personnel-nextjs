import "../styles/globals.css";
import { wrapper } from "../redux/store";
import Loading from "../components/Loading";
import React from "react";
import Router from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const [loadingKey, setLoadingKey] = React.useState(0);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
      setLoadingKey(loadingKey + 1);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Head>
        <title>บุคลากร โรงเรียนวิสุทธรังษี จังหวัดกาญจนบุรี</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
        <meta property="og:image" content="/icon.svg" />
        <meta
          property="og:title"
          content="โรงเรียนวิสุทธรังษี จังหวัดกาญจนบุรี"
        />
      </Head>
      <Loading isRouteChanging={loading} key={loadingKey} />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
