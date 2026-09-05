import { useCallback, useRef } from "react";

export const useDebouncedCallback = <T>(func: (...args: T[]) => void, wait: number) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  return useCallback(
    (...args: T[]) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
};
