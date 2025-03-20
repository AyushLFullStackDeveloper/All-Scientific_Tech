import { useEffect } from 'react';

/**
 * Custom hook to enhance scroll animations
 * @param {Object} options - Configuration options
 */
const useScrollAnimation = (options = {}) => {
  useEffect(() => {
    // Default options
    const defaults = {
      duration: 800,
      easing: 'easeInOutQuad',
      offset: 0
    };
    
    const config = { ...defaults, ...options };

    // Easing functions
    const easings = {
      linear: t => t,
      easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeInCubic: t => t * t * t,
      easeOutCubic: t => (--t) * t * t + 1
    };
    
    // Scroll animation function
    const animateScroll = (element, to, duration) => {
      const start = window.pageYOffset;
      const change = to - start + config.offset;
      const startTime = performance.now();
      const easing = easings[config.easing] || easings.easeInOutQuad;
      
      const animateFrame = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        
        if (elapsedTime > duration) {
          window.scrollTo(0, to + config.offset);
          return;
        }
        
        const progress = elapsedTime / duration;
        const easedProgress = easing(progress);
        const scrollY = Math.floor(start + change * easedProgress);
        
        window.scrollTo(0, scrollX);
        requestAnimationFrame(animateFrame);
      };
      
      requestAnimationFrame(animateFrame);
    };
    
    // Enhanced scrollToSection function
    const enhancedScrollTo = (ref) => {
      if (!ref.current) return;
      
      const elementTop = ref.current.getBoundingClientRect().top;
      const offsetTop = window.pageYOffset;
      const targetPosition = elementTop + offsetTop;
      
      animateScroll(document.documentElement, targetPosition, config.duration);
    };
    
    // Attach the enhanced function to window for global access
    window.enhancedScrollTo = enhancedScrollTo;
    
    return () => {
      delete window.enhancedScrollTo;
    };
  }, [options]);

  
};

export default useScrollAnimation;