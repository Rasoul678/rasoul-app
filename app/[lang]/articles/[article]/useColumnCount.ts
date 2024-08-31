import { useElementSize } from "@hooks/useElementSize";

export const useColumnCount = () => {
  const [windowState] = useElementSize();
  let columnCount = 0;

  switch (windowState.status) {
    case "unsupported":
      columnCount = -1;
      break;
    case "undetected":
      columnCount = 0;
      break;
    case "detected":
      if (windowState.width < 520) {
        columnCount = 1;
      } else if (windowState.width < 860 && windowState.width > 520) {
        columnCount = 3;
      } else if (windowState.width > 860 && windowState.width < 1100) {
        columnCount = 4;
      } else {
        columnCount = 5;
      }
  }

  return { columnCount, windowState };
};
