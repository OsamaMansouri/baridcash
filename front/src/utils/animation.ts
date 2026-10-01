
import { useEffect, useState } from 'react';

// Custom hook to check if element is in viewport for scroll animations
export function useInView(ref: React.RefObject<HTMLElement>, options = { threshold: 0.1 }) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      options
    );
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
}

// Animation classes - reusable CSS classes for animations
export const animations = {
  fadeIn: "opacity-0 transition-opacity duration-1000 ease-in-out",
  fadeInActive: "opacity-100",
  slideUp: "translate-y-10 opacity-0 transition-all duration-700 ease-out",
  slideUpActive: "translate-y-0 opacity-100",
  scaleIn: "scale-95 opacity-0 transition-all duration-500",
  scaleInActive: "scale-100 opacity-100",
  // Staggered animation delay classes
  delay100: "delay-100",
  delay200: "delay-200",
  delay300: "delay-300",
  delay400: "delay-400",
  delay500: "delay-500",
};
