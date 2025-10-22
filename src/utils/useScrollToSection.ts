"use client";

import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to sections
 * Handles hash navigation and smooth scroll behavior
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const handleHashNavigation = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("/#")) {
        e.preventDefault();
        const sectionId = href.substring(2);
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    },
    [scrollToSection]
  );

  return { scrollToSection, handleHashNavigation };
};

export default useScrollToSection;
