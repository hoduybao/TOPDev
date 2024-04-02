import React from 'react';

export default function useSticky() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element becomes sticky
        if (entry.isIntersecting) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      },
      {
        root: null,
        rootMargin: '-1px',
        threshold: [1], // Adjust the threshold as needed
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Run effect only once

  return { ref, isSticky };
}
