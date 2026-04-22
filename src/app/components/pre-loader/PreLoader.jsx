'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/styles/PreLoader.module.css';

export default function PreLoader({ 
  onComplete, 
  logoText = 'HS',
  logoType = 'text',
  logoImageSrc = '/logo.png',
  minDuration = 2000
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      setProgress(p => {
        const next = Math.min(p + Math.random() * 12, 100);
        if (next >= 100) {
          clearInterval(timer);
          const elapsed = Date.now() - start;
          setTimeout(onComplete, Math.max(0, minDuration - elapsed));
        }
        return next;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete, minDuration]);

  return (
    <motion.div
      className={styles.preloader}
      // *** THE FIX: initial={false} = renders at full opacity instantly ***
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className={styles.content}>
        <motion.div 
          className={styles.logoContainer}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {logoType === 'image' ? (
            <img src={logoImageSrc} alt="HS" className={styles.logoImage} />
          ) : (
            <div className={styles.logoText}>{logoText}</div>
          )}
        </motion.div>

        <div className={styles.progressTrack}>
          <motion.div 
            className={styles.progressBar}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
        
        <span className={styles.percent}>{Math.round(progress)}%</span>
      </div>
    </motion.div>
  );
}