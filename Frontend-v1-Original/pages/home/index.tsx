import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Typography, Button, Grid } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';


import { useScrollTo } from "react-use-window-scroll";

const styles = {
  wrapper: "relative flex h-full w-screen flex-col pt-20",
  section: "relative w-full h-screen",
  mainGrid: "absolute top-1/3 left-1/2 z-[2] h-auto max-w-[80vw] -translate-x-1/2 -translate-y-1/2 text-left md:max-w-[80vw] flex lg:flex-row-reverse md:flex-row-reverse sm:flex-col xs:flex-col justify-center",
  mainGridReverse: "absolute top-1/3 left-1/2 z-[2] h-auto max-w-[50vw] -translate-x-1/2 -translate-y-1/2 text-left md:max-w-[80vw] flex lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-center",
  mainImage: "flex justify-center",
  mainGridTitle: "relative bottom-0 text-left mb-5 animate-titleAnim font-montserrat font-black lg:text-5xl uppercase tracking-wider text-white delay-[0s] md:text-4xl sm:text-[10px] xs:text-[20px]",
  mainGridText: "relative bottom-0 mb-6 animate-titleAnim text-left font-montserrat font-medium text-lg delay-200 sm:text-md md:mb-10 md:text-[20px] w-[42em] text-white ",
  heading: "text-white flex flex-row",
  buttons: "relative bottom-0 min-w-[70px] animate-titleAnim font-montserrat font-bold text-md capitalize text-white delay-[400ms] max-md:float-none max-md:m-0 max-md:w-full rounded-[5px]",
  miniSection: "absolute w-full bottom-[120px]",
  miniSectionContainer: "flex flex-row",
  socialMediaGrid: "flex justify-center gap-2 pl-[50px]",
  socialMediaIcon: "flex px-1 cursor-pointer",
  scrollbuttonGrid: "flex justify-center",
  scrollbutton: "py-auto my-auto bg-beraPurple p-4 w-[60px] h-[60px] rounded-[50%] flex justify-center",
  arrowDown: "text-white text-[30px]",
  statistics: "relative w-full ",
  text: "flex justify-end  animate-titleAnim font-montserrat font-medium delay-200 text-right p-5 lg:justify-end md:justify-center sm:justify-center xs:justify-center text-white",
  underline: "underline underline-offset-[5px] decoration-beraPurple decoration-4",
  statisticsGrid: "bg-[#181346] h-full rounded-l-[15px] rounded-r-[15px] flex flex-row justify-around",
  statisticsGridItem: "text-center p-5",
  statisticsGridItemNumber: "font-montserrat font-bold",
  statisticsGridItemName: "text-beraPurple"
}


function Home() {
  const router = useRouter();
  const scrollTo = useScrollTo();

  return (
    <div className={styles.wrapper}>
      <div className="relative flex flex-col flex-wrap sm:text-[50%]">
        {/* Home Section */}
        <div className={styles.section}>
          {/* Main Container Grid */}
          <Grid
            container
            spacing={2}
            className={styles.mainGrid}
          >
            {/* Image Grid */}
            <Grid item lg={4} md={6} sm={12} xs={12} className={styles.mainImage}>
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
                        className={`${styles.buttons} bg-beraPurple`}
                        onClick={() => router.push("/swap")}
                      >
                        connect wallet
                        <EastOutlinedIcon fontSize={"medium"} className="ml-2" />
                      </Button>
                    </Grid>
                    <Grid item lg={5} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraBlue`}
                        onClick={() =>
                          scrollTo({ top: 900, left: 0, behavior: "smooth" })
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

          {/* Mini Section */}
          <div className={styles.miniSection}>
            <Grid container className={styles.miniSectionContainer}>
              {/* Social media section */}
              <Grid item lg={4} md={12} sm={12} xs={12} className={styles.socialMediaGrid} >
                <div>
                  <Link href="https://discord.com/invite/beradrome" target="_blank">
                    <Image src='/socials/discord.svg' alt='social-media' width={40} height={40} className={styles.socialMediaIcon} />
                  </Link>
                  <Link href="https://twitter.com/beradrome" target="_blank">
                    <Image src='/socials/twitter.svg' alt='social-media' width={40} height={40} className={styles.socialMediaIcon} />
                  </Link>
                  <Link href="https://github.com/BeraLabs" target="_blank">
                    <Image src='/socials/github.svg' alt='social-media' width={40} height={40} className={styles.socialMediaIcon} />
                  </Link>
                  <Link href="https://discord.com/invite/beradrome" target="_blank">
                    <Image src='/socials/medium.svg' alt='social-media' width={40} height={40} className={styles.socialMediaIcon} />
                  </Link>
                  <Link href="https://discord.com/invite/beradrome" target="_blank">
                    <Image src='/socials/youtube.svg' alt='social-media' width={40} height={40} className={styles.socialMediaIcon} />
                  </Link>
                  <Link href="https://discord.com/invite/beradrome" target="_blank">
                    <Image src='/socials/telegram.svg' alt='social-media' width={40} height={40} className={styles.socialMediaIcon} />
                  </Link>
                </div>
              </Grid>
              {/* End Social media */}

              {/* Tap to scroll button */}
              <Grid item lg={4} md={12} sm={12} xs={12} className={styles.scrollbuttonGrid}>
                <div className={styles.scrollbutton}>
                  <Button
                    onClick={() =>
                      scrollTo({ top: 900, left: 0, behavior: "smooth" })
                    }
                  >
                    <ArrowDownwardOutlinedIcon className={styles.arrowDown} />
                  </Button>
                </div>
              </Grid>
              {/* End Tap to scroll button */}

              <Grid item lg={4}>

              </Grid>
            </Grid>
          </div>
          {/* End mini Section */}

        </div>
        {/* End Home Section */}

        {/* Statistics */}
        <div className={styles.statistics}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={12} sm={12} xs={12} >
              <Typography variant="h1" className={styles.text}>
                Trusted by&nbsp;
                <span className={styles.underline}>over 60k beras</span>
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <Grid container className="ml-[50px]">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Grid container className={styles.statisticsGrid}>
                    <Grid item className={styles.statisticsGridItem}>
                      <div>
                        <Typography variant="h1" className={styles.statisticsGridItemNumber}>21B</Typography>
                        <div className={styles.statisticsGridItemName}>Total volume</div>
                      </div>
                    </Grid>
                    <Grid item className={styles.statisticsGridItem}>
                      <div>
                        <Typography variant="h1" className={styles.statisticsGridItemNumber}>21.1M</Typography>
                        <div className={styles.statisticsGridItemName}>Total liquidity</div>
                      </div>
                    </Grid>
                    <Grid item className={styles.statisticsGridItem}>
                      <div>
                        <Typography variant="h1" className={styles.statisticsGridItemNumber}>10.5M</Typography>
                        <div className={styles.statisticsGridItemName}>Total in Beradrome rewards</div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {/* End Statistics */}

        {/* Swap Info */}
        <div className={styles.section}>
          {/* Main Container Grid */}
          <Grid
            container
            spacing={2}
            className={styles.mainGrid}
          >
            {/* Image Grid */}
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Image src='/images/swap_info.svg' width={350} height={338} className={styles.mainImage} />
            </Grid>

            {/* Main Text Grid */}
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="h1"
                    className={styles.heading}
                  >
                    <Image src={'/images/menu_Swap_icon.svg'} width={40} height={40} />
                    &nbsp; Swap your favourite tokens
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} className="flex flex-col">
                  <Typography
                    variant="body1"
                    className={styles.mainGridText}
                  >
                    Beradrome is a decentralized exchange (DEX) on Berachain.
                  </Typography>
                  <Typography variant="body1" className={styles.mainGridText}>
                    Beradrome uses a variable AMM (vAMM) for uncorrelated liquidity pairs (vLP) and a stable AMM (sAMM) for highly correlated liquidity pairs (sLP). For traders, Beradrome's unique master router offers the lowest slippage possible and protects liquidity providers from asset volatility.
                  </Typography>
                </Grid>

                {/* Button Grid */}
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Grid container>
                    <Grid item lg={7} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraPurple`}
                        onClick={() => router.push("/swap")}
                      >
                        swap
                      </Button>
                    </Grid>
                    <Grid item lg={5} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraBlue`}
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

        </div>
        {/* End Swap Info */}

        {/* Farm Info */}
        <div className={styles.section}>
          {/* Main Container Grid */}
          <Grid
            container
            spacing={2}
            className={styles.mainGridReverse}
          >
            {/* Image Grid */}
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Image src='/images/farm_info.svg' width={350} height={338} className={styles.mainImage} />
            </Grid>

            {/* Main Text Grid */}
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="h1"
                    className={styles.heading}
                  >
                    <Image src={'/images/menu_Farms_icon.svg'} width={40} height={40} />
                    &nbsp; Earn passively by farming
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} className="flex flex-col">
                  <Typography
                    variant="body1"
                    className={styles.mainGridText}
                  >
                    Farming is the process of lending your assets to our AMM. These assets are used to build liquidity pools, allowing people to swap and trade.
                  </Typography>
                  <Typography variant="body1" className={styles.mainGridText}>
                    In return for providing liquidity to Beradrome, you are rewarded with BERO tokens. These can be used to invest, vote and more.
                  </Typography>
                </Grid>

                {/* Button Grid */}
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Grid container>
                    <Grid item lg={7} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraPurple`}
                        onClick={() => router.push("/swap")}
                      >
                        farm
                      </Button>
                    </Grid>
                    <Grid item lg={5} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraBlue`}
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

        </div>
        {/* End Farm Info */}

        {/* Bridge Info */}
        <div className={styles.section}>
          {/* Main Container Grid */}
          <Grid
            container
            spacing={2}
            className={styles.mainGrid}
          >
            {/* Image Grid */}
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Image src='/images/bridge_info.svg' width={350} height={338} className={styles.mainImage} />
            </Grid>

            {/* Main Text Grid */}
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="h1"
                    className={styles.heading}
                  >
                    <Image src={'/images/menu_Bridge_icon.svg'} width={40} height={40} />
                    &nbsp; Bridge your tokens
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} className="flex flex-col">
                  <Typography
                    variant="body1"
                    className={styles.mainGridText}
                  >
                    Our bridge aggregator is a first of its kind on Berachain. You can now bridge tokens over from other chains such as Ethereum, Avalanche, Terra and Arbitrum to name a few.
                  </Typography>
                  <Typography variant="body1" className={styles.mainGridText}>
                    By using our bridge, you have the ability to port over assets and capital from other chains to enjoy the speed and efficiency that Beradrome offers on Berachain.
                  </Typography>
                </Grid>

                {/* Button Grid */}
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Grid container>
                    <Grid item lg={7} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraPurple`}
                        onClick={() => router.push("/swap")}
                      >
                        bridge
                      </Button>
                    </Grid>
                    <Grid item lg={5} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraBlue`}
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

        </div>
        {/* End Bridge Info */}

        {/* Lend and Borrow Info */}
        <div className={styles.section}>
          {/* Main Container Grid */}
          <Grid
            container
            spacing={2}
            className={styles.mainGridReverse}
          >
            {/* Image Grid */}
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Image src='/images/lend_borrow_info.svg' width={350} height={338} className={styles.mainImage} />
            </Grid>

            {/* Main Text Grid */}
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="h1"
                    className={styles.heading}
                  >
                    <Image src={'/images/menu_Lend_icon.svg'} width={40} height={40} />
                    &nbsp; Lend and Borrow
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} className="flex flex-col">
                  <Typography
                    variant="body1"
                    className={styles.mainGridText}
                  >
                    Ola’s lending network hosted by SpiritSwap allows for lending and borrowing directly within our DEX. This means people can leverage their trades, leverage their farms, or provide lending assets directly to the network.
                  </Typography>
                  <Typography variant="body1" className={styles.mainGridText}>
                    Through the implementation of our new stable AMM, the lending network is supplied directly from dormant liquidity in our stable LPs. This ensures a constant supply of assets is available to borrow and be used for lending incentives, which dramatically improves capital efficiency.
                  </Typography>
                </Grid>

                {/* Button Grid */}
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Grid container>
                    <Grid item lg={7} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraPurple`}
                        onClick={() => router.push("/swap")}
                      >
                        lend and borrow
                      </Button>
                    </Grid>
                    <Grid item lg={5} md={8} sm={6} xs={6}>
                      <Button
                        className={`${styles.buttons} bg-beraBlue`}
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

        </div>
        {/* End Lend and Borrow Info */}

        {/* Footer */}
        <div className={` bg-[#181346]`}>

        </div>
        {/* End Footer */}
      </div>
    </div>
  );
}

export default Home;
