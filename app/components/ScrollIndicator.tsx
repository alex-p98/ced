'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShow(scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: show ? 1 : 0,
        y: show ? 0 : 20,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-400 font-light tracking-wider">SCROLL</span>
        <ChevronDown className="w-6 h-6 text-blue-400" />
      </motion.div>
    </motion.div>
  );
} 