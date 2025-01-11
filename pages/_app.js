import "../styles/globals.css";
import "../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/assets/vendor/boxicons/css/boxicons.min.css";
import "../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../public/assets/vendor/remixicon/remixicon.css";
import "../public/assets/vendor/swiper/swiper-bundle.min.css";
import Head from "next/head";
import about from "../Data/About";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={about.longBio} />
        <meta
          name="keywords"
          content="GGSIPU, GGSIPU EDC, USAR, Uday Gupta, CSE, B.Tech, Software Developer, Website Developer, AI-ML Engineer, AI-ML Developer, TensorFlow"
        />
        <link rel="manifest" href="/manifest.json" />
        <title>Portfolio - Uday Gupta</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
