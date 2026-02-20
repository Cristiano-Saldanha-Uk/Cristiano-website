import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

<<<<<<< HEAD
  return { ref, controls, variants: {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: 50 }
  }};
=======
  return { 
    ref, 
    controls, 
    variants: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      hidden: { opacity: 0, y: 50 }
    }
  };
>>>>>>> e0ada8ad1977a8283bc779ea003ea47232dbd327
}