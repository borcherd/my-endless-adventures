"use client";

import * as global_components from "@/components/Global";
import { Box } from "@chakra-ui/react";

export function PageWrapper({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="flex min-h-screen flex-col ">
        <global_components.NavBar />
        <Box backgroundColor={'#FCF3E2'} width={'100%'}>
        <Box
        //  maxWidth={{
        //   base: "100%",
        //   sm: "100%",
        //   md: "90%",
        //   lg: "85%",
        //   xl: "80%",
        // }} 
        maxWidth={'100%'}
        mx="auto"
        >
          {children}
        </Box></Box>
      </div>
    </div>
  );
}
