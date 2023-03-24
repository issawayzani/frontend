import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Typography } from "@mui/material";
import { withTheme } from "@mui/styles";

import classes from "./navigation.module.css";
import Image from 'next/image';
import {Box} from '@mui/material'
function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const activePath = router.asPath;
    if (activePath.includes("home")) {
      setActive("home");
    }
    if (activePath.includes("swap")) {
      setActive("swap");
    }
    if (activePath.includes("liquidity/create")) {
      setActive("liquidity/create");
    } else if (activePath.includes("liquidity"))  {
      setActive("liquidity");
    }
    if (activePath.includes("vest")) {
      setActive("vest");
    }
    if (activePath.includes("vote")) {
      setActive("vote");
    }
    if (activePath.includes("bribe")) {
      setActive("bribe");
    }
    if (activePath.includes("rewards")) {
      setActive("rewards");
    }
    if (activePath.includes("dashboard")) {
      setActive("dashboard");
    }
  }, [router.asPath]);

  const renderNavs = () => {
    return (
      <Box mb="20px">
      <div className={classes.navToggles}>
        {renderSubNav(`Home`, "home")}
        {renderSubNav("Swap", "swap")}
        {renderSubNav("Liquidity", "addliquidity")}
        {renderSubNav("Farms", "liquidity")}
        {/* {renderSubNav("hiBERO", "hibero")} */}
        {renderSubNav("Vest", "vest")}
        {renderSubNav("Vote", "vote")}
        {renderSubNav("Rewards", "rewards")}
        {renderSubNav("Bribe", "bribe")} 
      </div>
      </Box>
    );
  };

  const renderSubNav = (title: string, link: string) => {
    if (link ==="addliquidity") {
      link = "liquidity/create"
    } 
  
    return (
      
      <Link href={"/" + link}>
        <a
          className={
            active === link
              ? `${classes.navButton} ${classes.testChange}`
              : classes.navButton
          }
        > 
          <Image src={`/images/menu_${title}_icon.svg`} width={20} height={20} />

          <Typography variant="h2" className={classes.subtitleText}>
            {title}
          </Typography>
        </a>
      </Link>
    );
  };

  const renderDocsTab = () => {
    return (
      <button
        className={classes.navButton}
        onClick={() => window.open("https://docs.beradrome.com/", "_blank")}
      >
        <Typography variant="h2" className={classes.subtitleText}>
          Documentation
        </Typography>
      </button>
    );
  };

  return (
    <div className={classes.navigationContainer}>
      <div className={classes.navigationContent}>{renderNavs()}</div>
    </div>
  );
}

export default withTheme(Navigation);
