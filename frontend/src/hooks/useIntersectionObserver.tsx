import { RefObject, useEffect, useState } from "react";

type Props<T extends HTMLElement> = {
  element: RefObject<T>;
};

const useIntersectionObserver = <T extends HTMLElement>({
  element,
}: Props<T>) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const target = element.current;

    if (!target) return;

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    io.observe(target);

    return () => io.disconnect();
  }, [element]);

  return { isIntersecting };
};

export default useIntersectionObserver;
