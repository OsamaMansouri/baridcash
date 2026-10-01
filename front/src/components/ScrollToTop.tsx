import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      // Wait for the DOM to be fully rendered
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80; // Offset for fixed header if needed
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // If no hash, scroll to top
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
        // Also try document.documentElement.scrollTop for additional browser support
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;