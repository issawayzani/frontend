import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Typography, Button, Grid } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


import { useScrollTo } from "react-use-window-scroll";

const styles = {
  wrapper: "relative mt-0 flex h-full w-full flex-col pt-20 lg:pt-10 sm:mt-[60px]",
  section: "relative w-full h-screen",
  mainGrid: "absolute top-1/3 left-1/2 z-[2] h-auto max-w-[50vw] -translate-x-1/2 -translate-y-1/2 text-left md:max-w-[80vw] flex flex-row-reverse sm:xs:flex-col",
  mainGridTitle: "relative bottom-0 text-left mb-5 animate-titleAnim font-montserrat font-black text-5xl uppercase tracking-wider text-white delay-[0s] xs:text-[20px]",
  mainGridText: "relative bottom-0 mb-6 animate-titleAnim text-left font-montserrat font-medium text-lg delay-200 sm:text-md md:mb-10 md:text-[20px] w-[42em]",
  buttons: "relative bottom-0 min-w-[70px] animate-titleAnim font-montserrat font-bold text-md capitalize text-white delay-[400ms] max-md:float-none max-md:m-0 max-md:w-full rounded-[5px]",
  miniSection: "absolute w-full bottom-[120px] xs:px-[100px] lg:px-[100px] border border-white ",
  socialMediaGrid: "flex justify-center gap-2 bg-green-400",
  socialMediaIcon: "flex px-1 cursor-pointer",
  scrollbutton: "border border-red-600 flex justify-center",
}


function Home() {
  const router = useRouter();
  const scrollTo = useScrollTo();

  return (
    <div className={styles.wrapper}>

      {/* Home Section */}
      <div className={styles.section}>
        {/* Main Container Grid */}
        <Grid
          container
          spacing={2}
          className={styles.mainGrid}
        >
          {/* Image Grid */}
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Image src='/images/bear-riding-cycle.svg' width={300} height={338} />
          </Grid>

          {/* Main Text Grid */}
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant="h1"
                  className={styles.mainGridTitle}
                >
                  honey <span className="text-beraPurple">talks!</span>
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} className="flex">
                <Typography
                  variant="body1"
                  className={styles.mainGridText}
                >
                  Beradrome is the liquidity and low-slippage trading hub on Berachain. Beradrome combines features from the top AMM models into one power house, taking ve(3,3) to a new level.
                  <br />
                  On Beradrome, protocols can build deep liquidity stat and increase the capital efficiency of their incentives by leveraging our built-in bribes, voting and farming mechanisms.
                </Typography>
              </Grid>

              {/* Button Grid */}
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Grid container>
                  <Grid item lg={7} md={8} sm={6} xs={6}>
                    <Button
                      className={`${styles.buttons} bg-[#9757FF]`}
                      onClick={() => router.push("/swap")}
                    >
                      connect wallet
                      <EastOutlinedIcon fontSize={"medium"} className="ml-2" />
                    </Button>
                  </Grid>
                  <Grid item lg={5} md={8} sm={6} xs={6}>
                    <Button
                      className={`${styles.buttons} bg-[#4639BF]`}
                      onClick={() =>
                        scrollTo({ top: 1000, left: 0, behavior: "smooth" })
                      }
                    >
                      learn more
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {/* End of Buttons Grid */}
            </Grid>
          </Grid>
          {/* End of Main Text Grid */}
        </Grid>
        {/* End of Main Container Grid */}

        <div className={styles.miniSection}>
          <Grid container>
            {/* Social media section */}
            <Grid item lg={4} md={12} sm={12} xs={12} className={styles.socialMediaGrid} >
              <div>
                <Link href="https://discord.com/invite/beradrome" target="_blank">
                  <Image src='/images/socialMedia/discord.svg' alt='social-media' width={50} height={50} className={styles.socialMediaIcon} />
                </Link>
                <Link href="https://twitter.com/beradrome" target="_blank">
                  <Image src='/images/socialMedia/twitter.svg' alt='social-media' width={50} height={50} className={styles.socialMediaIcon} />
                </Link>
                <Link href="https://github.com/BeraLabs" target="_blank">
                  <Image src='/images/socialMedia/github.svg' alt='social-media' width={50} height={50} className={styles.socialMediaIcon} />
                </Link>
                <Link href="https://discord.com/invite/beradrome" target="_blank">
                  <Image src='/images/socialMedia/medium.svg' alt='social-media' width={50} height={50} className={styles.socialMediaIcon} />
                </Link>
                <Link href="https://discord.com/invite/beradrome" target="_blank">
                  <Image src='/images/socialMedia/youtube.svg' alt='social-media' width={50} height={50} className={styles.socialMediaIcon} />
                </Link>
                <Link href="https://discord.com/invite/beradrome" target="_blank">
                  <Image src='/images/socialMedia/telegram.svg' alt='social-media' width={50} height={50} className={styles.socialMediaIcon} />
                </Link>
              </div>
            </Grid>
            {/* End Social media */}

            {/* Tap to scroll button */}
            <Grid item lg={4} md={12} sm={12} xs={12} className={styles.scrollbutton}>
              <div className="py-auto my-auto">
                hello
              </div>
            </Grid>
            {/* End Tap to scroll button */}

            <Grid item lg={4}>

            </Grid>
          </Grid>
        </div>
      </div>
      {/* End Home Section */}

      {/* Info Section */}
      <div id="info" className={styles.section}>
        <Grid
          container
          spacing={3}
          className="absolute top-1/2 left-1/2 z-[2] h-auto max-w-[80vw] -translate-x-1/2 -translate-y-1/2 text-center md:max-w-[50vw]"
        >
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="h1"
              className="mb-5 text-center font-montserrat text-lg sm:text-3xl"
            >
              Welcome to Velocimeter
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="body1"
              className="mb-5 text-sm text-white sm:text-base md:text-lg"
            >
              Velocimeter officially launched in January 2023 with a collective
              goal of fair and balanced access to DeFi. Velocimeter is a
              decentralized exchange that has launched on the Arbitrum network
              with low fees, near 0 slippage on correlated assets and a strong
              focus on secondary markets for tokenized locks as NFT&apos;s.
            </Typography>
            <Typography
              variant="body2"
              className="mb-5 text-xs text-[#f2f2f2] sm:text-sm md:text-base"
            >
              One segment of the cryptocurrency landscape that has shown
              incredible potential is the swapping of stablecoins and volatile
              assets. Velocimeter Swap offers users quick, seamless and cheap
              transactions while utilizing strategies to maximize their yield.
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button
              className="min-w-full bg-[#06d3d71a] pl-3 pt-5 pr-[10px] pb-5 font-montserrat capitalize text-beraPurple max-md:w-full"
              onClick={() => router.push("/swap")}
            >
              Enter App
            </Button>
          </Grid>
        </Grid>
      </div>
      {/* End Info Section */}
    </div>
  );
}

export default Home;
