import { useRouter } from "next/router";
import Image from "next/image";
import { Typography, Button, Grid } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import { useScrollTo } from "react-use-window-scroll";

const styles = {
  wrapper: "relative flex w-full flex-col lg:mt-[2em] mt-[15em]",
  mainSection: "relative w-full h-screen",
  subSection: "relative w-full",
}


function Home() {
  const router = useRouter();
  const scrollTo = useScrollTo();

  return (
    <div className={styles.wrapper}>

      {/* Home Section */}
      <div className={styles.mainSection}>

        {/* Main Container Grid */}
        <div className="relative mx-auto top-1/2 -translate-y-1/2 lg:w-[80vw] w-full flex flex-col justify-center lg:pt-0 md:pt-[20em] pt-[10em]">
          <div className="lg:my-[10em] my-[5em]">
            <div className="relative flex lg:flex-row gap-4 flex-col-reverse">
              <div className="p-5 box-border lg:w-[55vw] w-full">
                <div className="mb-3">
                  <Typography variant="h1" className="font-montserrat font-black uppercase lg:text-[4em] md:text-[3em] text-[2.5em]">
                    Honey <span className="text-beraPurple">Talks</span>
                  </Typography>
                </div>

                <div className="my-[2em] py-5 lg:w-[45vw] w-full">
                  <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md mb-2">
                    Beradrome is the liquidity and low-slippage trading hub on Berachain. Beradrome combines features from the top AMM models into one power house, taking ve(3,3) to a new level.
                  </Typography>
                  <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md">
                    On Beradrome, protocols can build deep liquidity stat and increase the capital efficiency of their incentives by leveraging our built-in bribes, voting and farming mechanisms.
                  </Typography>
                </div>

                <div className="flex flex-col sm:flex-row lg:justify-start justify-center lg:w-[30rem] w-full sm:gap-0 sm:p-0 gap-2 p-2">
                  <Button className="bg-beraPurple rounded-[5px] m-3 text-white text-[15px] hover:opacity-80 sm:w-full lg:w-[15rem]" onClick={() => router.push("/swap")}>
                    Connect Wallet
                    <EastOutlinedIcon className="ml-3" />
                  </Button>
                  <Button className="bg-beraBlue rounded-[5px] text-white m-3 text-[15px] hover:opacity-80 sm:w-full lg:w-[15rem]">Learn More</Button>
                </div>
              </div>

              <div className="relative lg:m-5 lg:p-5 m-auto">
                <img src={'/images/bear-riding-cycle.svg'} alt="bear-riding-cycle" className="lg:w-[40vw] lg:h-[35vh] w-[60vw] h-[25vh]" />
              </div>
            </div>
          </div>
          {/* Mini section */}
          <div className="relative mt-[1rem] lg:w-[80vw] w-full mx-auto">
            <div className="flex lg:flex-row flex-col justify-center">

              {/* Social Media */}
              <div className="m-2 relative flex flex-1 left-0 lg:justify-start justify-center">
                <div className="flex space-x-6 sm:justify-center p-2">
                  <a href="https://discord.gg/beradrome" className="text-white hover:text-beraPurple">
                    <svg fill="currentColor" viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
                      <path d="M20.9308 7.64152C19.6342 7.04632 18.2658 6.62189 16.8599 6.37886C16.8472 6.37647 16.834 6.37818 16.8222 6.38373C16.8105 6.38928 16.8008 6.39839 16.7945 6.40977C16.6187 6.72252 16.4239 7.13044 16.2876 7.45102C14.7503 7.22086 13.2209 7.22086 11.7153 7.45102C11.5789 7.12327 11.3771 6.72252 11.2005 6.40977C11.194 6.39865 11.1842 6.38976 11.1726 6.38426C11.1609 6.37876 11.1478 6.37691 11.1351 6.37894C9.72907 6.62141 8.36058 7.04581 7.06409 7.64144C7.053 7.64618 7.04365 7.65424 7.03734 7.66452C4.4445 11.5382 3.73417 15.3166 4.08267 19.0482C4.08366 19.0573 4.08646 19.0662 4.09093 19.0742C4.0954 19.0822 4.10143 19.0893 4.10867 19.0949C5.81934 20.3513 7.47642 21.1139 9.10275 21.6194C9.1154 21.6232 9.1289 21.623 9.14144 21.6189C9.15398 21.6148 9.16496 21.607 9.17292 21.5964C9.55759 21.0711 9.9005 20.5171 10.1946 19.9346C10.1986 19.9266 10.2009 19.9179 10.2014 19.909C10.2018 19.9 10.2003 19.8911 10.197 19.8828C10.1938 19.8745 10.1888 19.8669 10.1824 19.8607C10.176 19.8544 10.1683 19.8496 10.1599 19.8465C9.61592 19.6402 9.098 19.3886 8.59975 19.1029C8.59067 19.0976 8.58304 19.0901 8.57753 19.0811C8.57203 19.0721 8.56882 19.0619 8.56819 19.0514C8.56757 19.0409 8.56954 19.0304 8.57394 19.0208C8.57834 19.0112 8.58503 19.0029 8.59342 18.9965C8.69825 18.9179 8.80317 18.8363 8.90325 18.7537C8.91215 18.7464 8.92292 18.7416 8.93434 18.7401C8.94577 18.7386 8.9574 18.7402 8.96792 18.7449C12.2411 20.2394 15.7846 20.2394 19.0191 18.7449C19.0296 18.7399 19.0414 18.738 19.0529 18.7394C19.0645 18.7408 19.0755 18.7455 19.0845 18.7529C19.1847 18.8354 19.2895 18.9179 19.3952 18.9965C19.4036 19.0028 19.4103 19.0111 19.4148 19.0206C19.4192 19.0302 19.4213 19.0407 19.4207 19.0512C19.4202 19.0617 19.4171 19.0719 19.4117 19.0809C19.4062 19.0899 19.3987 19.0974 19.3897 19.1029C18.8912 19.394 18.3691 19.6425 17.8288 19.8457C17.8204 19.8489 17.8128 19.8538 17.8065 19.8602C17.8001 19.8665 17.7952 19.8742 17.792 19.8826C17.7888 19.891 17.7874 19.8999 17.7879 19.9089C17.7884 19.9179 17.7908 19.9266 17.7949 19.9346C18.0953 20.5163 18.4382 21.0703 18.8158 21.5956C18.8235 21.6064 18.8344 21.6146 18.847 21.6189C18.8596 21.6231 18.8732 21.6233 18.8859 21.6194C20.5201 21.1139 22.1772 20.3512 23.8878 19.0949C23.8952 19.0896 23.9013 19.0827 23.9058 19.0748C23.9103 19.0668 23.9131 19.058 23.9139 19.0489C24.3309 14.7348 23.2154 10.9874 20.9568 7.66527C20.9513 7.65448 20.9421 7.64603 20.9308 7.64144V7.64152ZM10.6833 16.776C9.69792 16.776 8.88592 15.8713 8.88592 14.7602C8.88592 13.6492 9.68217 12.7444 10.6834 12.7444C11.6924 12.7444 12.4965 13.6571 12.4808 14.7603C12.4808 15.8713 11.6845 16.776 10.6833 16.776V16.776ZM17.329 16.776C16.3436 16.776 15.5316 15.8713 15.5316 14.7602C15.5316 13.6492 16.3278 12.7444 17.329 12.7444C18.338 12.7444 19.1421 13.6571 19.1263 14.7603C19.1263 15.8713 18.338 16.776 17.329 16.776V16.776Z" />
                    </svg>
                    <span className="sr-only">Discord</span>
                  </a>

                  <a href="https://twitter.com/beradrome" className="text-white hover:text-beraPurple">
                    <svg fill="currentColor" viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
                      <path d="M23.9608 7.80832C23.2121 8.138 22.4188 8.35561 21.6067 8.45416C22.4618 7.9402 23.102 7.1342 23.4092 6.18499C22.6167 6.64749 21.7383 6.98416 20.8033 7.17166C20.1865 6.51202 19.3691 6.07451 18.478 5.92708C17.587 5.77964 16.6722 5.93053 15.8758 6.35632C15.0793 6.7821 14.4457 7.45895 14.0734 8.28176C13.701 9.10457 13.6108 10.0273 13.8167 10.9067C10.4083 10.7458 7.38917 9.10832 5.36667 6.63499C4.99899 7.25984 4.80722 7.97251 4.81167 8.69749C4.81167 10.1225 5.53667 11.375 6.635 12.1108C5.98405 12.0901 5.34748 11.9141 4.77833 11.5975V11.6475C4.77796 12.5945 5.10522 13.5124 5.70459 14.2456C6.30395 14.9788 7.13851 15.4821 8.06667 15.67C7.46525 15.8311 6.83534 15.8553 6.22333 15.7408C6.48677 16.5558 6.99805 17.2683 7.68585 17.7787C8.37364 18.2892 9.20363 18.5722 10.06 18.5883C8.60961 19.7266 6.81873 20.3444 4.975 20.3425C4.65 20.3425 4.32583 20.3233 4 20.2867C5.87976 21.4903 8.06543 22.1292 10.2975 22.1275C17.8417 22.1275 21.9625 15.8808 21.9625 10.4733C21.9625 10.2983 21.9625 10.1233 21.95 9.94832C22.755 9.36904 23.4494 8.64984 24 7.82499L23.9608 7.80832Z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>

                  <a href="https://github.com/BeraLabs" className="text-white hover:text-beraPurple">
                    <svg fill="currentColor" viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
                      <path d="M14 4.24756C8.475 4.24756 4 8.72506 4 14.2476C4 18.6667 6.865 22.4142 10.8375 23.7351C11.3375 23.8292 11.5208 23.5201 11.5208 23.2542C11.5208 23.0167 11.5125 22.3876 11.5083 21.5542C8.72667 22.1576 8.14 20.2126 8.14 20.2126C7.685 19.0584 7.0275 18.7501 7.0275 18.7501C6.12167 18.1301 7.0975 18.1426 7.0975 18.1426C8.10167 18.2126 8.62917 19.1726 8.62917 19.1726C9.52083 20.7017 10.97 20.2601 11.5417 20.0042C11.6317 19.3576 11.8892 18.9167 12.175 18.6667C9.95417 18.4167 7.62 17.5567 7.62 13.7251C7.62 12.6334 8.0075 11.7417 8.64917 11.0417C8.53667 10.7892 8.19917 9.77256 8.73667 8.39506C8.73667 8.39506 9.57417 8.12673 11.4867 9.42006C12.2867 9.19756 13.1367 9.08756 13.9867 9.08256C14.8367 9.08756 15.6867 9.19756 16.4867 9.42006C18.3867 8.12673 19.2242 8.39506 19.2242 8.39506C19.7617 9.77256 19.4242 10.7892 19.3242 11.0417C19.9617 11.7417 20.3492 12.6334 20.3492 13.7251C20.3492 17.5667 18.0117 18.4126 15.7867 18.6584C16.1367 18.9584 16.4617 19.5717 16.4617 20.5084C16.4617 21.8467 16.4492 22.9217 16.4492 23.2467C16.4492 23.5092 16.6242 23.8217 17.1367 23.7217C21.1375 22.4101 24 18.6601 24 14.2476C24 8.72506 19.5225 4.24756 14 4.24756" />
                    </svg>
                    <span className="sr-only">Github</span>
                  </a>
                </div>
              </div>
              {/* Social Media */}

              {/* scroller */}
              <div className="flex flex-1 justify-center lg:justify-start">
                <div className="relative flex align-middle py-auto my-auto bg-beraPurple w-[60px] h-[60px] rounded-[50%] justify-center">
                  <Button
                    onClick={() =>
                      scrollTo({ top: 900, left: 0, behavior: "smooth" })
                    }
                  >
                    <ArrowDownwardOutlinedIcon className="text-white text-[30px]" />
                  </Button>
                </div>
              </div>
              {/* scroller */}

            </div>
          </div>
          {/* Mini section */}
        </div>
        {/* End of Main Container Grid */}


      </div>
      {/* End Home Section */}

      {/* Swap info section */}
      <div className={`${styles.subSection} lg:mt-0 mt-[15em]`}>

        {/* Main Container Grid */}
        <div className="relative mx-auto my-5 lg:w-[80vw] w-full flex flex-row justify-center lg:pt-0 pt-[2em]">
          <div className="relative flex lg:flex-row gap-4 flex-col-reverse">
            <div className="p-5 box-border lg:w-[80vw] w-full">
              <div className="mb-3 flex flex-row">
                <img src={'/images/menu_Swap_icon.svg'} className="lg:w-[3rem] w-[1.5rem]" />
                <Typography variant="h1" className="ml-5 font-montserrat font-medium lg:text-[3em] md:text-[2.5em] text-[2em]">
                  Swap your favourite tokens
                </Typography>
              </div>

              <div className="my-[2em] py-5 lg:w-[45vw] w-full">
                <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md mb-2">
                  Beradrome is a decentralized exchange (DEX) on Berachain.
                </Typography>
                <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md">
                  Beradrome uses a variable AMM (vAMM) for uncorrelated liquidity pairs (vLP) and a stable AMM (sAMM) for highly correlated liquidity pairs (sLP). For traders, Beradrome's unique master router offers the lowest slippage possible and protects liquidity providers from asset volatility.
                </Typography>
              </div>

              <div className="flex flex-col sm:flex-row lg:justify-start justify-center lg:w-[30rem] w-full border border-beraBlue rounded-[5px] sm:gap-0 sm:p-0 gap-2 p-2">
                <Button className="bg-beraPurple rounded-[5px] sm:m-3 text-white text-[15px] hover:opacity-80 w-full lg:w-[15rem]" onClick={() => router.push("/swap")}>
                  Swap
                </Button>
                <Button className="bg-beraBlue rounded-[5px] text-white sm:m-3 text-[15px] hover:opacity-80 w-full lg:w-[15rem]">Learn More</Button>
              </div>

            </div>
            <div className="relative lg:m-5 lg:p-5  m-auto">
              <img src={'/images/swap_info.svg'} alt="swap" className="lg:w-[40vw] lg:h-[40vh] w-[60vw] h-[25vh]" />
            </div>
          </div>
        </div>
        {/* End of Main Container Grid */}
      </div>
      {/* End Swap info section */}

      {/* Farm info section */}
      <div className={`${styles.subSection} lg:mt-0 mt-[2em]`}>

        {/* Main Container Grid */}
        <div className="relative mx-auto my-5 lg:w-[80vw] w-full flex flex-row justify-center lg:pt-0 pt-[2em]">
          <div className="relative flex lg:flex-row-reverse gap-4 flex-col-reverse">
            <div className="p-5 box-border lg:w-[80vw] w-full">
              <div className="mb-3 flex flex-row">
                <img src={'/images/menu_Farms_icon.svg'} className="lg:w-[3rem] w-[1.5rem]" />
                <Typography variant="h1" className="ml-5 font-montserrat font-medium lg:text-[3em] md:text-[2.5em] text-[2em]">
                  Earn passively by farming
                </Typography>
              </div>

              <div className="my-[2em] py-5 lg:w-[45vw] w-full">
                <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md mb-2">
                  Farming is the process of lending your assets to our AMM. These assets are used to build liquidity pools, allowing people to swap and trade.
                </Typography>
                <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md">
                  In return for providing liquidity to Beradrome, you are rewarded with BERO tokens. These can be used to invest, vote and more.
                </Typography>
              </div>

              <div className="flex flex-col sm:flex-row lg:justify-start justify-center lg:w-[30rem] w-full border border-beraBlue rounded-[5px] sm:gap-0 sm:p-0 gap-2 p-2">
                <Button className="bg-beraPurple rounded-[5px] sm:m-3 text-white text-[15px] hover:opacity-80 w-full lg:w-[15rem]" onClick={() => router.push("/farms")}>
                  Farm
                </Button>
                <Button className="bg-beraBlue rounded-[5px] text-white sm:m-3 text-[15px] hover:opacity-80 w-full lg:w-[15rem]">Learn More</Button>
              </div>

            </div>
            <div className="relative lg:m-5 lg:p-5  m-auto">
              <img src={'/images/farm_info.svg'} alt="swap" className="lg:w-[40vw] lg:h-[40vh] w-[60vw] h-[25vh]" />
            </div>
          </div>
        </div>
        {/* End of Main Container Grid */}
      </div>
      {/* End Farm info section */}

      {/* Bridge info section */}
      <div className={`${styles.subSection} lg:mt-0 mt-[2em]`}>

        {/* Main Container Grid */}
        <div className="relative mx-auto my-5 lg:w-[80vw] w-full flex flex-row justify-center lg:pt-0 pt-[2em]">
          <div className="relative flex lg:flex-row gap-4 flex-col-reverse">
            <div className="p-5 box-border lg:w-[80vw] w-full">
              <div className="mb-3 flex flex-row">
                <img src={'/images/menu_Bridge_icon.svg'} className="lg:w-[3rem] w-[1.5rem]" />
                <Typography variant="h1" className="ml-5 font-montserrat font-medium lg:text-[3em] md:text-[2.5em] text-[2em]">
                  Bridge your tokens
                </Typography>
              </div>

              <div className="my-[2em] py-5 lg:w-[45vw] w-full">
                <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md mb-2">
                  Our bridge aggregator is a first of its kind on Berachain. You can now bridge tokens over from other chains such as Ethereum, Avalanche, Terra and Arbitrum to name a few.
                </Typography>
                <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md">
                  By using our bridge, you have the ability to port over assets and capital from other chains to enjoy the speed and efficiency that Beradrome offers on Berachain.
                </Typography>
              </div>

              <div className="flex flex-col sm:flex-row lg:justify-start justify-center lg:w-[30rem] w-full border border-beraBlue rounded-[5px] sm:gap-0 sm:p-0 gap-2 p-2">
                <Button className="bg-beraPurple rounded-[5px] sm:m-3 text-white text-[15px] hover:opacity-80 w-full lg:w-[15rem]" onClick={() => router.push("/bridge")}>
                  Bridge
                </Button>
                <Button className="bg-beraBlue rounded-[5px] text-white sm:m-3 text-[15px] hover:opacity-80 w-full lg:w-[15rem]">Learn More</Button>
              </div>

            </div>
            <div className="relative lg:m-5 lg:p-5  m-auto">
              <img src={'/images/bridge_info.svg'} alt="swap" className="lg:w-[40vw] lg:h-[40vh] w-[60vw] h-[25vh]" />
            </div>
          </div>
        </div>
        {/* End of Main Container Grid */}
      </div>
      {/* End Bridge info section */}

      {/* lend and Borrow info section */}
      <div className={`${styles.subSection} lg:mt-0 mt-[2em]`}>

        {/* Main Container Grid */}
        <div className="relative mx-auto my-5 lg:w-[80vw] w-full flex flex-row justify-center lg:pt-0 pt-[2em]">
          <div className="relative flex lg:flex-row-reverse gap-4 flex-col-reverse">
            <div className="p-5 box-border lg:w-[80vw] w-full">
              <div className="mb-3 flex flex-row">
                <img src={'/images/menu_Lend_icon.svg'} className="lg:w-[3rem] w-[1.5rem]" />
                <Typography variant="h1" className="ml-5 font-montserrat font-medium lg:text-[3em] md:text-[2.5em] text-[2em]">
                  Lend and borrow
                </Typography>
              </div>

              <div className="my-[2em] py-5 lg:w-[45vw] w-full">
                <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md mb-2">
                  Ola’s lending network hosted by SpiritSwap allows for lending and borrowing directly within our DEX. This means people can leverage their trades, leverage their farms, or provide lending assets directly to the network.
                </Typography>
                <Typography variant="body1" className="font-montserrat font-medium lg:text-xl text-lg xs:text-md">
                  Through the implementation of our new stable AMM, the lending network is supplied directly from dormant liquidity in our stable LPs. This ensures a constant supply of assets is available to borrow and be used for lending incentives, which dramatically improves capital efficiency.
                </Typography>
              </div>

              <div className="flex flex-col sm:flex-row lg:justify-start justify-center lg:w-[30rem] w-full border border-beraBlue rounded-[5px] sm:gap-0 sm:p-0 gap-2 p-2">
                <Button className="bg-beraPurple rounded-[5px] sm:m-3 text-white text-[15px] hover:opacity-80 w-full lg:w-[15rem]" onClick={() => router.push("/swap")}>
                  Lend and Borrow
                </Button>
                <Button className="bg-beraBlue rounded-[5px] text-white sm:m-3 text-[15px] hover:opacity-80 w-full lg:w-[15rem]">Learn More</Button>
              </div>

            </div>
            <div className="relative lg:m-5 lg:p-5  m-auto">
              <img src={'/images/lend_borrow_info.svg'} alt="swap" className="lg:w-[40vw] lg:h-[40vh] w-[60vw] h-[25vh]" />
            </div>
          </div>
        </div>
        {/* End of Main Container Grid */}
      </div>
      {/* End lend and Borrow info section */}

      {/* Show more btn */}
      <div className={`${styles.subSection} flex justify-center my-5`}>
        <div className="mb-5">
          <Button className={`relative bottom-0 min-w-[90px] animate-titleAnim font-montserrat font-bold text-md capitalize text-white delay-[400ms] max-md:float-none max-md:m-0 max-md:w-full rounded-[5px] bg-beraBlue justify-center hover:opacity-80`}>
            Show More
          </Button>
        </div>
      </div>
      {/* Show more btn */}

      <footer className="bg-[#181346]">
        {/* footer section */}
        <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            {/* Social media */}
            <div className="flex mt-4 mb-4 space-x-6 justify-center">
              <a href="https://discord.gg/beradrome" className="text-white hover:text-beraPurple">
                <svg fill="currentColor" viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
                  <path d="M20.9308 7.64152C19.6342 7.04632 18.2658 6.62189 16.8599 6.37886C16.8472 6.37647 16.834 6.37818 16.8222 6.38373C16.8105 6.38928 16.8008 6.39839 16.7945 6.40977C16.6187 6.72252 16.4239 7.13044 16.2876 7.45102C14.7503 7.22086 13.2209 7.22086 11.7153 7.45102C11.5789 7.12327 11.3771 6.72252 11.2005 6.40977C11.194 6.39865 11.1842 6.38976 11.1726 6.38426C11.1609 6.37876 11.1478 6.37691 11.1351 6.37894C9.72907 6.62141 8.36058 7.04581 7.06409 7.64144C7.053 7.64618 7.04365 7.65424 7.03734 7.66452C4.4445 11.5382 3.73417 15.3166 4.08267 19.0482C4.08366 19.0573 4.08646 19.0662 4.09093 19.0742C4.0954 19.0822 4.10143 19.0893 4.10867 19.0949C5.81934 20.3513 7.47642 21.1139 9.10275 21.6194C9.1154 21.6232 9.1289 21.623 9.14144 21.6189C9.15398 21.6148 9.16496 21.607 9.17292 21.5964C9.55759 21.0711 9.9005 20.5171 10.1946 19.9346C10.1986 19.9266 10.2009 19.9179 10.2014 19.909C10.2018 19.9 10.2003 19.8911 10.197 19.8828C10.1938 19.8745 10.1888 19.8669 10.1824 19.8607C10.176 19.8544 10.1683 19.8496 10.1599 19.8465C9.61592 19.6402 9.098 19.3886 8.59975 19.1029C8.59067 19.0976 8.58304 19.0901 8.57753 19.0811C8.57203 19.0721 8.56882 19.0619 8.56819 19.0514C8.56757 19.0409 8.56954 19.0304 8.57394 19.0208C8.57834 19.0112 8.58503 19.0029 8.59342 18.9965C8.69825 18.9179 8.80317 18.8363 8.90325 18.7537C8.91215 18.7464 8.92292 18.7416 8.93434 18.7401C8.94577 18.7386 8.9574 18.7402 8.96792 18.7449C12.2411 20.2394 15.7846 20.2394 19.0191 18.7449C19.0296 18.7399 19.0414 18.738 19.0529 18.7394C19.0645 18.7408 19.0755 18.7455 19.0845 18.7529C19.1847 18.8354 19.2895 18.9179 19.3952 18.9965C19.4036 19.0028 19.4103 19.0111 19.4148 19.0206C19.4192 19.0302 19.4213 19.0407 19.4207 19.0512C19.4202 19.0617 19.4171 19.0719 19.4117 19.0809C19.4062 19.0899 19.3987 19.0974 19.3897 19.1029C18.8912 19.394 18.3691 19.6425 17.8288 19.8457C17.8204 19.8489 17.8128 19.8538 17.8065 19.8602C17.8001 19.8665 17.7952 19.8742 17.792 19.8826C17.7888 19.891 17.7874 19.8999 17.7879 19.9089C17.7884 19.9179 17.7908 19.9266 17.7949 19.9346C18.0953 20.5163 18.4382 21.0703 18.8158 21.5956C18.8235 21.6064 18.8344 21.6146 18.847 21.6189C18.8596 21.6231 18.8732 21.6233 18.8859 21.6194C20.5201 21.1139 22.1772 20.3512 23.8878 19.0949C23.8952 19.0896 23.9013 19.0827 23.9058 19.0748C23.9103 19.0668 23.9131 19.058 23.9139 19.0489C24.3309 14.7348 23.2154 10.9874 20.9568 7.66527C20.9513 7.65448 20.9421 7.64603 20.9308 7.64144V7.64152ZM10.6833 16.776C9.69792 16.776 8.88592 15.8713 8.88592 14.7602C8.88592 13.6492 9.68217 12.7444 10.6834 12.7444C11.6924 12.7444 12.4965 13.6571 12.4808 14.7603C12.4808 15.8713 11.6845 16.776 10.6833 16.776V16.776ZM17.329 16.776C16.3436 16.776 15.5316 15.8713 15.5316 14.7602C15.5316 13.6492 16.3278 12.7444 17.329 12.7444C18.338 12.7444 19.1421 13.6571 19.1263 14.7603C19.1263 15.8713 18.338 16.776 17.329 16.776V16.776Z" />
                </svg>
                <span className="sr-only">Discord</span>
              </a>

              <a href="https://twitter.com/beradrome" className="text-white hover:text-beraPurple">
                <svg fill="currentColor" viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
                  <path d="M23.9608 7.80832C23.2121 8.138 22.4188 8.35561 21.6067 8.45416C22.4618 7.9402 23.102 7.1342 23.4092 6.18499C22.6167 6.64749 21.7383 6.98416 20.8033 7.17166C20.1865 6.51202 19.3691 6.07451 18.478 5.92708C17.587 5.77964 16.6722 5.93053 15.8758 6.35632C15.0793 6.7821 14.4457 7.45895 14.0734 8.28176C13.701 9.10457 13.6108 10.0273 13.8167 10.9067C10.4083 10.7458 7.38917 9.10832 5.36667 6.63499C4.99899 7.25984 4.80722 7.97251 4.81167 8.69749C4.81167 10.1225 5.53667 11.375 6.635 12.1108C5.98405 12.0901 5.34748 11.9141 4.77833 11.5975V11.6475C4.77796 12.5945 5.10522 13.5124 5.70459 14.2456C6.30395 14.9788 7.13851 15.4821 8.06667 15.67C7.46525 15.8311 6.83534 15.8553 6.22333 15.7408C6.48677 16.5558 6.99805 17.2683 7.68585 17.7787C8.37364 18.2892 9.20363 18.5722 10.06 18.5883C8.60961 19.7266 6.81873 20.3444 4.975 20.3425C4.65 20.3425 4.32583 20.3233 4 20.2867C5.87976 21.4903 8.06543 22.1292 10.2975 22.1275C17.8417 22.1275 21.9625 15.8808 21.9625 10.4733C21.9625 10.2983 21.9625 10.1233 21.95 9.94832C22.755 9.36904 23.4494 8.64984 24 7.82499L23.9608 7.80832Z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>

              <a href="https://github.com/BeraLabs" className="text-white hover:text-beraPurple">
                <svg fill="currentColor" viewBox="0 0 24 24" width={30} height={30} aria-hidden="true">
                  <path d="M14 4.24756C8.475 4.24756 4 8.72506 4 14.2476C4 18.6667 6.865 22.4142 10.8375 23.7351C11.3375 23.8292 11.5208 23.5201 11.5208 23.2542C11.5208 23.0167 11.5125 22.3876 11.5083 21.5542C8.72667 22.1576 8.14 20.2126 8.14 20.2126C7.685 19.0584 7.0275 18.7501 7.0275 18.7501C6.12167 18.1301 7.0975 18.1426 7.0975 18.1426C8.10167 18.2126 8.62917 19.1726 8.62917 19.1726C9.52083 20.7017 10.97 20.2601 11.5417 20.0042C11.6317 19.3576 11.8892 18.9167 12.175 18.6667C9.95417 18.4167 7.62 17.5567 7.62 13.7251C7.62 12.6334 8.0075 11.7417 8.64917 11.0417C8.53667 10.7892 8.19917 9.77256 8.73667 8.39506C8.73667 8.39506 9.57417 8.12673 11.4867 9.42006C12.2867 9.19756 13.1367 9.08756 13.9867 9.08256C14.8367 9.08756 15.6867 9.19756 16.4867 9.42006C18.3867 8.12673 19.2242 8.39506 19.2242 8.39506C19.7617 9.77256 19.4242 10.7892 19.3242 11.0417C19.9617 11.7417 20.3492 12.6334 20.3492 13.7251C20.3492 17.5667 18.0117 18.4126 15.7867 18.6584C16.1367 18.9584 16.4617 19.5717 16.4617 20.5084C16.4617 21.8467 16.4492 22.9217 16.4492 23.2467C16.4492 23.5092 16.6242 23.8217 17.1367 23.7217C21.1375 22.4101 24 18.6601 24 14.2476C24 8.72506 19.5225 4.24756 14 4.24756" />
                </svg>
                <span className="sr-only">Github</span>
              </a>
            </div>
            {/* Social media */}

            {/* external pages */}
            <ul className="text-white flex lg:flex-col lg:gap-1 flex-row justify-center gap-4">
              <li className="mb-2">
                <a href="#" className="hover:underline">About us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Analytics</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Docs</a>
              </li>
            </ul>
            {/* external pages */}
          </div>

          {/* footer subsections */}
          <div className="flex flex-row justify-around">
            <div className="grid lg:grid-cols-3 lg:gap-8 gap-6 grid-cols-3">
              <div>
                <h2 className="mb-4 text-md lg:text-lg font-semibold uppercase text-beraPurple">DEX</h2>
                <ul className="text-white">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Defi LIama</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">CoinGecko</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">CoinMarketCap</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-md lg:text-lg font-semibold uppercase text-beraPurple">BERO Token</h2>
                <ul className="text-white">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">CoinGecko</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">CoinMarketCap</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-md lg:text-lg font-semibold uppercase text-beraPurple">Exchanges</h2>
                <ul className="text-white">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Felix</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Gate.io</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">MEXC</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* footer subsections */}
        </div>
        {/* footer section */}

        {/* mini footer */}
        <div className="w-full mx-auto container md:p-6 p-4 flex md:flex-row md:items-center md:justify-start items-center flex-col gap-2 justify-center">
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:text-left text-center mb-2 lg:mb-2">
                <span className="text-[1em] text-white "><HelpOutlineOutlinedIcon className="text-sm" /> 2022 Beradrome</span>
              </div>
              <div className="flex justify-center">
                <div className="bg-beraPurple h-[2px] lg:w-[55em] w-[35em] m-[0.5em]"></div>
              </div>
            </div>
            <div className="flex lg:justify-end justify-center">
              <span className="text-[#ADADAD]">Build 9e4746c</span>
            </div>
          </div>
        </div>
        {/* mini footer */}
      </footer>

    </div>
  );
}

export default Home;