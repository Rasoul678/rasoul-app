import { useCallback } from "react";

type ArgsType = {
  offset?: number;
};

const useScrollTo: (args?: ArgsType) => Function = (args) => {
  const scrollTo = useCallback(
    (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const top = element.getBoundingClientRect().top - (args?.offset ?? 0);
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    },
    [args?.offset]
  );

  return scrollTo;
};

export default useScrollTo;
