import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';


// Customize NProgress styles to match your theme
NProgress.configure({
  template: `
    <div class="global-progress-bar" role="bar">
      <div class="sparkle-wrapper"></div>
      <div class="peg"></div>
    </div>
  `,
  showSpinner: false,
  minimum: 0.1,
  trickleSpeed: 200,
  parent: 'body'
});

// Add custom styles to your main CSS file
const addCustomStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    #nprogress {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;s
      width: 100%;
      height: 5px;
      z-index: 10000;
    }
    
    .global-progress-bar {
      background: linear-gradient(to right, #8b5cf6, #ec4899, #f59e0b);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
    }
    
    #nprogress .sparkle-wrapper {
      position: absolute;
      top: -8px;
      right: 0;
      height: 20px;
      width: 20px;
      transform: translateX(50%);
    }
    
    .global-progress-bar-sparkle {
      position: absolute;
      top: 0;
      right: 0;
      color: #f59e0b;
      filter: drop-shadow(0 0 2px rgba(245, 158, 11, 0.8));
    }
  `;
  document.head.appendChild(style);
};

const GlobalProgressBar: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    addCustomStyles();
    
    // Create sparkle element
    const sparkleWrapper = document.querySelector('#nprogress .sparkle-wrapper');
    if (sparkleWrapper) {
      const sparkle = document.createElement('div');
      sparkle.className = 'global-progress-bar-sparkle';
      sparkle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /></svg>';
      sparkleWrapper.appendChild(sparkle);
    }
    
    return () => {
      NProgress.done();
      setIsLoading(false);
    };
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
      
      // Animate the sparkle
      const sparkle = document.querySelector('.global-progress-bar-sparkle');
      if (sparkle) {
        sparkle.animate(
          [
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: 'translateY(-15px) rotate(30deg)', opacity: 0.7 },
            { transform: 'translateY(-30px) rotate(60deg)', opacity: 0 }
          ],
          {
            duration: 1000,
            iterations: Infinity
          }
        );
      }
    };

    const handleComplete = () => {
      NProgress.done();
      setIsLoading(false);
    };

    // Start progress on route change
    handleStart();

    // Complete progress when route change is done
    const timer = setTimeout(handleComplete, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bg-[white] bg-opacity-90 inset-0 z-[9999] pointer-events-none"
        >
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg"
              animate={{ 
                scale: [1, 1.05, 1],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              <SparklesIcon className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Loading your experience...
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalProgressBar;