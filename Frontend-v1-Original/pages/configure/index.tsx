import Image from "next/image";
import { withTheme } from "@mui/styles";
import './configure.module.css'

function Configure() {
  return (
    <div className="back w-100 h-100 relative flex min-h-screen flex-col items-center justify-center bg-none">
      <Image src="/images/logo_icon.svg" width="100%" height="100%" />
      {/* <div className="pointer-events-none absolute bottom-4 left-4 h-[512px] w-[512px] opacity-50 blur-[256px]" />
      <div className="pointer-events-none absolute top-4 right-4 h-[512px] w-[512px] opacity-50 blur-[256px]" /> */}
    </div>
  );
}

export default withTheme(Configure);
