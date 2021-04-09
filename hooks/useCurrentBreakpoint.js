import { useState, useRef, useEffect } from 'react';

import { theme } from 'ui-kit';

const { breakpoints } = theme;

const breakpointNames = Object.keys(breakpoints);
const defaultBreakpoint = breakpointNames[0];

export default function useCurrentBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(defaultBreakpoint);
  const matchers = useRef([]);
  const isClient = typeof window !== undefined;

  useEffect(() => {
    if (!isClient) {
      return null;
    }

    matchers.current = [];
    let initialBreakpointName = breakpointNames[0];
    let cleanupFunctions = [];

    // For each breakpoint (after the first)...
    for (let index = 1; index < breakpointNames.length; index++) {
      const name = breakpointNames[index];

      const matcher = window.matchMedia(`(min-width: ${breakpoints[name]})`);

      // Is this breakpoint active?
      if (matcher.matches) {
        initialBreakpointName = name;
      }

      // Listen for changes to this breakpoint `matches` status
      const handleMatchesChange = () => {
        if (matcher.matches) {
          // Moved up a breakpoint
          setCurrentBreakpoint(name);
        } else {
          // Moved down a breakpoint
          setCurrentBreakpoint(breakpointNames[Math.max(0, index - 1)]);
        }
      };

      matcher.addEventListener('change', handleMatchesChange);
      cleanupFunctions.push(() => {
        matcher.removeEventListener('change', handleMatchesChange);
      });

      matchers.current.push(matcher);
    }

    setCurrentBreakpoint(initialBreakpointName);

    return () => {
      cleanupFunctions.forEach(cleanupFunction => cleanupFunction());
      matchers.current = [];
    };
  }, [isClient]);

  return {
    name: currentBreakpoint,
    isSmall: currentBreakpoint === 'sm',
    isMedium: currentBreakpoint === 'md',
    isLarge: currentBreakpoint === 'lg',
    isXLarge: currentBreakpoint === 'xl',
  };
}
