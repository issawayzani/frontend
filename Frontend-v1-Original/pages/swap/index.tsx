import { useState, useEffect } from "react";
import { Typography, Button, Paper } from "@mui/material";

import SwapComponent from "../../components/ssSwap/ssSwap";
import Unlock from "../../components/unlock/unlockModal";

import { ACTIONS } from "../../stores/constants/constants";
import stores from "../../stores";

function Swap({ changeTheme }) {
  const [account, setAccount] = useState(
    stores.accountStore.getStore("account")
  );
  const [unlockOpen, setUnlockOpen] = useState(false);

  useEffect(() => {
    const accountConfigure = () => {
      setAccount(stores.accountStore.getStore("account"));
      closeUnlock();
    };
    const connectWallet = () => {
      onAddressClicked();
    };

    stores.emitter.on(ACTIONS.ACCOUNT_CONFIGURED, accountConfigure);
    stores.emitter.on(ACTIONS.CONNECT_WALLET, connectWallet);
    return () => {
      stores.emitter.removeListener(
        ACTIONS.ACCOUNT_CONFIGURED,
        accountConfigure
      );
      stores.emitter.removeListener(ACTIONS.CONNECT_WALLET, connectWallet);
    };
  }, []);

  const onAddressClicked = () => {
    setUnlockOpen(true);
  };

  const closeUnlock = () => {
    setUnlockOpen(false);
  };

  return (
    <div className="relative mt-0 flex h-full w-full flex-col pt-8 sm:pt-20 lg:pt-28">
      {account && account.address ? (
        <SwapComponent />
      ) : (
        <Paper className="fixed top-0 flex h-[calc(100%-150px)] w-[calc(100%-80px)] flex-col flex-wrap items-center justify-center bg-[rgba(17,23,41,0.2)] p-12 text-center shadow-none max-lg:my-auto max-lg:mt-24 max-lg:mb-0 lg:h-[100vh] lg:w-full">
          <div className="relative z-10">
            <Typography
              className="text-center font-montserrat text-2xl font-thin text-white sm:text-3xl"
              variant="h1"
            >
              Swap
            </Typography>
            <Typography
              className="color-[#7e99b0] my-7 mx-auto max-w-3xl text-center text-base sm:text-lg"
              variant="body2"
            >
              Swap between Beradrome supported stable and volatile assets.
            </Typography>
            <Button
              disableElevation
              className="scale-90 rounded-3xl border border-solid border-[#4639bf]  bg-[#9757FF] px-6 pt-3 pb-4 font-bold transition-all duration-300 hover:scale-95 hover:bg-[#4639bf]"
              variant="contained"
              onClick={onAddressClicked}
            >
              <Typography color="white">Connect Wallet to Continue</Typography>
            </Button>
          </div>
        </Paper>
      )}
      {unlockOpen && <Unlock modalOpen={unlockOpen} closeModal={closeUnlock} />}
    </div>
  );
}

export default Swap;
