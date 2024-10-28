import { useEffect, useRef, useState } from "react";

import esbuild from "esbuild-wasm";

export const useESBuildService = () => {
  const serviceRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  const startService = async () => {
    await esbuild.initialize({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.23.1/esbuild.wasm",
    });
  };

  useEffect(() => {
    if (!serviceRef.current) {
      try {
        startService();
        serviceRef.current = true;
        setIsReady(true);
      } catch (error) {
        throw error;
      }
    }
  }, []);

  return isReady;
};
