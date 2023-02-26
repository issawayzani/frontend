import Image from "next/image";
import { withTheme } from "@mui/styles";
import classes from "./configure.module.css";

function Configure() {
  return (
    <div className={classes.configureContainer}>
      <Image src="/images/logo-icon-configure.png" width="100%" height="100%" />
      <div className={classes.greyGlow} />
      <div className={classes.greenGlow} />
    </div>
  );
}

export default withTheme(Configure);