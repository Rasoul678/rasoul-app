"use client";

import { HydrationBoundaryProps, HydrationBoundary } from "@tanstack/react-query";

const Hydrate = (props: HydrationBoundaryProps) => {
  return <HydrationBoundary {...props} />;
};

export default Hydrate;
