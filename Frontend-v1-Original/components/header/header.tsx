import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  Typography,
  Button,
  SvgIcon,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { withStyles, withTheme } from "@mui/styles";
import {
  List,
  ArrowDropDown,
  AccountBalanceWalletOutlined,
  DashboardOutlined,
} from "@mui/icons-material";

import Navigation from "../navigation/navigation";
import Unlock from "../unlock/unlockModal";
import TransactionQueue from "../transactionQueue/transactionQueue";

import { ACTIONS } from "../../stores/constants/constants";

import stores from "../../stores";
import { formatAddress } from "../../utils/utils";

import classes from "./header.module.css";

type EthWindow = Window &
  typeof globalThis & {
    ethereum?: any;
  };

function SiteLogo({ className }) {
  return (
    <Image
      className={className}
      src="/images/bera_logo.svg"
      alt="beradrome logo"
      height={50}
      width={260}
    />
  );
}

const { CONNECT_WALLET, ACCOUNT_CONFIGURED, ACCOUNT_CHANGED, ERROR } = ACTIONS;

function WrongNetworkIcon(props: { className?: string }) {
  const { className } = props;
  return (
    <SvgIcon viewBox="0 0 64 64" strokeWidth="1" className={className}>
      <g strokeWidth="2" transform="translate(0, 0)">
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="square"
          strokeMiterlimit="10"
          d="M33.994,42.339 C36.327,43.161,38,45.385,38,48c0,3.314-2.686,6-6,6c-2.615,0-4.839-1.673-5.661-4.006"
          strokeLinejoin="miter"
        ></path>{" "}
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="square"
          strokeMiterlimit="10"
          d="M47.556,32.444 C43.575,28.462,38.075,26,32,26c-6.075,0-11.575,2.462-15.556,6.444"
          strokeLinejoin="miter"
        ></path>{" "}
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="square"
          strokeMiterlimit="10"
          d="M59.224,21.276 C52.256,14.309,42.632,10,32,10c-10.631,0-20.256,4.309-27.224,11.276"
          strokeLinejoin="miter"
        ></path>{" "}
        <line
          data-color="color-2"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="square"
          strokeMiterlimit="10"
          x1="10"
          y1="54"
          x2="58"
          y2="6"
          strokeLinejoin="miter"
        ></line>
      </g>
    </SvgIcon>
  );
}

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "none",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "#FFF",
      },
    },
  },
}))(MenuItem);

const StyledBadge = withStyles((theme) => ({
  badge: {
    background: "#06D3D7",
    color: "#000",
  },
}))(Badge);

const switchChain = async () => {
  let hexChain = "0x" + Number(process.env.NEXT_PUBLIC_CHAINID).toString(16);
  try {
    await (window as EthWindow).ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: hexChain }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await (window as EthWindow).ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: hexChain,
              chainName: "Canto",
              nativeCurrency: {
                name: "CANTO",
                symbol: "CANTO",
                decimals: 18,
              },
              rpcUrls: [
                "https://canto.slingshot.finance/",
                "https://canto.gravitychain.io/",
                "https://canto.neobase.one/",
                "https://canto.evm.chandrastation.com/",
                "https://jsonrpc.canto.nodestake.top/",
              ],
              blockExplorerUrls: [
                "https://tuber.build/",
                "https://evm.explorer.canto.io/",
              ],
            },
          ],
        });
      } catch (addError) {
        console.log("add error", addError);
      }
    }
    console.log("switch error", switchError);
  }
};

function Header() {
  const accountStore = stores.accountStore.getStore("account");
  const router = useRouter();

  const [account, setAccount] = useState(accountStore);
  const [unlockOpen, setUnlockOpen] = useState(false);
  const [chainInvalid, setChainInvalid] = useState(false);
  const [transactionQueueLength, setTransactionQueueLength] = useState(0);

  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame;
      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame);
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params);
        });
      };
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    // Update scroll position for first time
    storeScroll();
  });

  useEffect(() => {
    const accountConfigure = () => {
      const accountStore = stores.accountStore.getStore("account");
      setAccount(accountStore);
      closeUnlock();
    };
    const connectWallet = () => {
      onAddressClicked();
    };
    const accountChanged = () => {
      const invalid = stores.accountStore.getStore("chainInvalid");
      setChainInvalid(invalid);
    };

    const invalid = stores.accountStore.getStore("chainInvalid");
    setChainInvalid(invalid);

    stores.emitter.on(ACCOUNT_CONFIGURED, accountConfigure);
    stores.emitter.on(CONNECT_WALLET, connectWallet);
    stores.emitter.on(ACCOUNT_CHANGED, accountChanged);
    return () => {
      stores.emitter.removeListener(ACCOUNT_CONFIGURED, accountConfigure);
      stores.emitter.removeListener(CONNECT_WALLET, connectWallet);
      stores.emitter.removeListener(ACCOUNT_CHANGED, accountChanged);
    };
  }, []);

  const onAddressClicked = () => {
    setUnlockOpen(true);
  };

  const closeUnlock = () => {
    setUnlockOpen(false);
  };

  const setQueueLength = (length) => {
    setTransactionQueueLength(length);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={classes.headerContainer}>
        <a
          onClick={() => router.push("/home")}
          className={classes.logoContainer}
        >
          <SiteLogo className={classes.appLogo} />
          {/* <Typography className={classes.logoText}>Beradrome</Typography> */}
        </a>

        <Navigation />

        <div
          style={{
            width: "350px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {process.env.NEXT_PUBLIC_CHAINID == "740" && (
            <div className={classes.testnetDisclaimer}>
              <Typography className={classes.testnetDisclaimerText}>
                Testnet
              </Typography>
            </div>
          )}

          {transactionQueueLength > 0 && (
            <IconButton
              className={classes.accountButton}
              color="primary"
              onClick={() => {
                stores.emitter.emit(ACTIONS.TX_OPEN);
              }}
            >
              <StyledBadge
                badgeContent={transactionQueueLength}
                color="secondary"
                overlap="circular"
              >
                <List className={classes.iconColor} />
              </StyledBadge>
            </IconButton>
          )}

          <Button
            disableElevation
            className={classes.accountButton}
            variant="contained"
            color="primary"
            aria-controls="simple-menu"
            aria-haspopup="true"
          >
            <Image src={'/images/honey.svg'} width={20} height={20} />

            <Typography className={`${classes.headBtnTxt} ml-2`}>
              0.0009
            </Typography>
          </Button>

          {account && account.address ? (
            <div>
              <Button
                disableElevation
                className={classes.accountButton}
                variant="contained"
                color="primary"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {account && account.address && (
                  <div
                    className={`${classes.accountIcon} ${classes.metamask}`}
                  ></div>
                )}
                <Typography className={classes.headBtnTxt}>
                  {account && account.address
                    ? formatAddress(account.address)
                    : "Connect Wallet"}
                </Typography>
                <ArrowDropDown className={classes.ddIcon} />
              </Button>
              <Menu
                elevation={0}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.userMenu}
              >
                <StyledMenuItem
                  className={classes.hidden}
                  onClick={() => router.push("/dashboard")}
                >
                  <ListItemIcon className={classes.userMenuIcon}>
                    <DashboardOutlined fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.userMenuText}
                    primary="Dashboard"
                  />
                </StyledMenuItem>
                <StyledMenuItem onClick={onAddressClicked}>
                  <ListItemIcon className={classes.userMenuIcon}>
                    <AccountBalanceWalletOutlined fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.userMenuText}
                    primary="Switch Wallet Provider"
                  />
                </StyledMenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              disableElevation
              className={classes.accountButton}
              variant="contained"
              color={"primary"}
              onClick={onAddressClicked}
            >
              {account && account.address && (
                <div
                  className={`${classes.accountIcon} ${classes.metamask}`}
                ></div>
              )}
              <Typography className={classes.headBtnTxt}>
                {account && account.address
                  ? formatAddress(account.address)
                  : (
                    <div className="flex flex-row">
                      <svg width="15" height="15" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1329 5.63723V4.47056C12.1329 3.53606 11.3759 2.7789 10.4416 2.7789C8.31249 2.7789 3.82043 2.7789 1.69132 2.7789C0.756993 2.7789 0 3.53606 0 4.47056C0 6.02281 0 8.75165 0 10.3039C0 11.2384 0.756993 11.9956 1.69132 11.9956C3.82043 11.9956 8.31249 11.9956 10.4416 11.9956C11.3759 11.9956 12.1329 11.2384 12.1329 10.3039C12.1329 9.72056 12.1329 9.13723 12.1329 9.13723C12.1329 8.84731 11.898 8.61223 11.6081 8.61223C11.3183 8.61223 11.0833 8.84731 11.0833 9.13723C11.0833 9.13723 11.0833 9.72056 11.0833 10.3039C11.0833 10.6586 10.7957 10.9456 10.4416 10.9456C8.31249 10.9456 3.82043 10.9456 1.69132 10.9456C1.33721 10.9456 1.04958 10.6586 1.04958 10.3039C1.04958 8.75165 1.04958 6.02281 1.04958 4.47056C1.04958 4.1159 1.33721 3.82889 1.69132 3.82889C3.82043 3.82889 8.31249 3.82889 10.4416 3.82889C10.7957 3.82889 11.0833 4.1159 11.0833 4.47056V5.63723C11.0833 5.92715 11.3183 6.16223 11.6081 6.16223C11.898 6.16223 12.1329 5.92715 12.1329 5.63723Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92598 3.77347C1.92598 3.77347 5.16639 2.15356 7.23781 1.11756C7.43672 1.01839 7.67298 1.02889 7.86198 1.14556C8.05156 1.26281 8.16648 1.4693 8.16648 1.69155C8.16648 2.51814 8.16648 3.30389 8.16648 3.30389H9.21647C9.21647 3.30389 9.21647 2.51814 9.21647 1.69155C9.21647 1.1053 8.91314 0.561057 8.41439 0.252473C7.91564 -0.0555266 7.29264 -0.083526 6.76823 0.178391C4.69681 1.21439 1.45697 2.83431 1.45697 2.83431L1.92598 3.77347Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7164 6.80391C12.7164 5.86941 11.9593 5.11224 11.0248 5.11224C10.4957 5.11224 9.85925 5.11224 9.27475 5.11224C8.01825 5.11224 6.99976 6.13074 6.99976 7.38724C6.99976 8.64374 8.01825 9.66224 9.27475 9.66224C9.85925 9.66224 10.4957 9.66224 11.0248 9.66224C11.9593 9.66224 12.7164 8.90507 12.7164 7.97057V6.80391ZM11.6664 6.80391C11.6664 6.44924 11.3794 6.16224 11.0248 6.16224C10.4957 6.16224 9.85925 6.16224 9.27475 6.16224C8.59809 6.16224 8.04975 6.71057 8.04975 7.38724C8.04975 8.06391 8.59809 8.61224 9.27475 8.61224C9.85925 8.61224 10.4957 8.61224 11.0248 8.61224C11.3794 8.61224 11.6664 8.32524 11.6664 7.97057V6.80391Z" fill="white" />
                        <path d="M9.27975 7.97085C9.60197 7.97085 9.86316 7.70951 9.86316 7.38713C9.86316 7.06474 9.60197 6.80341 9.27975 6.80341C8.95752 6.80341 8.69629 7.06474 8.69629 7.38713C8.69629 7.70951 8.95752 7.97085 9.27975 7.97085Z" fill="white" />
                      </svg>

                      <p className="ml-2">Connect Wallet</p>
                    </div>
                  )}
              </Typography>
            </Button>
          )}
        </div>
        {unlockOpen && (
          <Unlock modalOpen={unlockOpen} closeModal={closeUnlock} />
        )}
        <TransactionQueue setQueueLength={setQueueLength} />
      </div>
      {chainInvalid ? (
        <div className={classes.chainInvalidError}>
          <div className={classes.ErrorContent}>
            <WrongNetworkIcon className={classes.networkIcon} />
            <Typography className={classes.ErrorTxt}>
              The chain you're connected to isn't supported. Please check that
              your wallet is connected to Canto Mainnet.
            </Typography>
            <Button
              className={classes.switchNetworkBtn}
              variant="contained"
              onClick={() => switchChain()}
            >
              Switch to{" "}
              {process.env.NEXT_PUBLIC_CHAINID == "740"
                ? "Canto testnet"
                : "Canto"}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default withTheme(Header);
