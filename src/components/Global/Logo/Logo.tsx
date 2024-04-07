"use client";

import * as assets from "@/assets";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export function Logo() {
  return (
    <Box>
      {/* <Image width={64} height={64} src={assets.LOGO} alt="logo" /> */}
      <label className="font-bold text-xl">LOGO</label>
    </Box>
  );
}
