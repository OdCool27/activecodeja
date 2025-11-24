import { useState, useEffect, useRef } from "react";

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element); // stop observing
                }
            },
            { threshold: 0.2, ...options }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [ref, options]);


    return [ref, isVisible];
}
