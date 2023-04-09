import { useEffect, useRef, useState } from "react";

export function useNearScreen() {
  const [show, setShow] = useState(false);
  const elRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(loadComponent, {
      rootMargin: "50px",
    });

    function loadComponent(entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    }

    observer.observe(elRef.current);

    return () => observer.disconnect();
  }, []);

  return { show, elRef };
}
