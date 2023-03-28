import Head from "next/head";
import classes from "./layout.module.css";
import Header from "../header/header";
import SnackbarController from "../snackbar/snackbarController";

export default function Layout({
  children,
  configure,
}: {
  children: React.ReactNode;
  configure?: boolean;
}) {
  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/images/logo_icon.svg" />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <meta
          name="description"
          content="Beradrome is the liquidity and low-slippage trading hub on Berachain. 
          Beradrome combines features from the top AMM models into one power house, taking ve(3,3) to a new level."
        />
        <meta name="og:title" content="Beradrome" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={classes.background} />
      {/* <div className={classes.greyGlow} />
      <div className={classes.greenGlow} /> */}
      <div className={classes.content}>
        {!configure && <Header />}
        <SnackbarController />
        <main>{children}</main>
      </div>
    </div>
  );
}
