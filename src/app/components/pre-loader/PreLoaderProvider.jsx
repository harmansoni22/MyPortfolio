// "use client";

// import { useState, useEffect } from "react";
// import Preloader from "./PreLoader";

// const PreLoaderProvider = ({ children }) => {
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => setIsLoaded(true), 3000);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <>
//             {!isLoaded && (
//                 <Preloader
//                     onComplete={() => setIsLoaded(true)}
//                     logoText="HS"
//                 />
//             )}
//             {children}
//         </>
//     )
// }

// export default PreLoaderProvider;

'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PreLoader from './PreLoader';

export default function PreloaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = isLoading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <PreLoader 
            onComplete={() => setIsLoading(false)}
            logoText="HS"
            logoType="text" // change to "image" when you have logo
            logoImageSrc="/hs-logo.png"
          />
        )}
      </AnimatePresence>

      {/* THIS IS THE KEY: hide content until preloader finishes */}
      <div 
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? 'hidden' : 'visible',
          transition: 'opacity 0.5s ease 0.2s'
        }}
      >
        {children}
      </div>
    </>
  );
}