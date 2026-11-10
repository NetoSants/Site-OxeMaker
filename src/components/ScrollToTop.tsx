import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let frame = 0;
      let attempts = 0;

      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        if (attempts < 60) {
          attempts += 1;
          frame = requestAnimationFrame(scrollToHash);
        }
      };

      frame = requestAnimationFrame(scrollToHash);
      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, hash, key]);

  return null;
};
