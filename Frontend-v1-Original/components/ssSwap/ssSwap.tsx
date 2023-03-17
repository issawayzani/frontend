import { Box} from "@mui/material";
import Setup from "./setup";
import classes from "./ssSwap.module.css";

function Swap() {
  return (
    <div className={classes.newSwapContainer}>
      <Box className={classes.swapContainer}>
        <Setup />
      </Box>
    </div>
  );
}

export default Swap;
