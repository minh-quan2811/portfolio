// Custom hook for scroll-based effects and animations
import { useEffect, useRef, useCallback } from 'react';

export const useScrollEffect = () => {
  const elementRef = useRef(null);
  const observer = useRef(null);

  const observeElement = useCallback((element, options = {}) => {
    const {
      threshold = 0.1,
      rootMargin = '0px',
      callback = () => {},
    } = options;

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
        callback(true);
      } else {
        entry.target.classList.remove('in-viewport');
        callback(false);
      }
    }, {
      threshold,
      rootMargin,
    });

    if (element) {
      observer.current.observe(element);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return {
    elementRef,
    observeElement,
  };
};

// Parallax scroll effect
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrollY = window.scrollY;
      const translateY = scrollY * speed;

      elementRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

// Smooth scroll to element
export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  return { scrollToElement };
};

export default useScrollEffect;
