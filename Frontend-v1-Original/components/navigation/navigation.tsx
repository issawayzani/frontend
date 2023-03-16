import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Typography } from "@mui/material";
import { withTheme } from "@mui/styles";

import classes from "./navigation.module.css";

function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState("swap");

  useEffect(() => {
    const activePath = router.asPath;
    if (activePath.includes("home")) {
      setActive("home");
    }
    if (activePath.includes("swap")) {
      setActive("swap");
    }
    if (activePath.includes("liquidity")) {
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
      <div className={classes.navToggles}>
        {renderSubNav("Swap", "swap")}
        {renderSubNav("Liquidity", "liquidity")}
        {renderSubNav("Vest", "vest")}
        {renderSubNav("Vote", "vote")}
        {renderSubNav("Rewards", "rewards")}
        {renderSubNav("Bribe", "bribe")}
      </div>
    );
  };

  const renderSubNav = (title: string, link: string) => {
    return (
      <Link href={"/" + link}>
        <a
          className={
            active === link
              ? `${classes.navButton} ${classes.testChange}`
              : classes.navButton
          }
        >
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
        onClick={() => window.open("https://docs.velocimeter.xyz/", "_blank")}
      >
        <Typography variant="h2" className={classes.subtitleText}>
          Docs
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
