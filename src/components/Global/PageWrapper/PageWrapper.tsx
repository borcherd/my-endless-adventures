"use client";

import * as global_components from "@/components/Global";

export function PageWrapper({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <global_components.NavBar />
      {children}
    </>
  );
}
