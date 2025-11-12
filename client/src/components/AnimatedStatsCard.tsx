import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedStatsCardProps {
  value: string;
  label: string;
  sublabel: string;
  icon: ReactNode;
  gradient: string;
  delay?: number;
}

export default function AnimatedStatsCard({ 
  value, 
  label, 
  sublabel, 
  icon, 
  gradient,
  delay = 0 
}: AnimatedStatsCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      // Extract number from value string
      const targetNumber = parseInt(value.replace(/\D/g, ''));
      const suffix = value.replace(/\d/g, '');
      
      if (isNaN(targetNumber)) {
        setCount(0);
        return;
      }

      const duration = 2000;
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const suffix = value.replace(/\d/g, '');
  const displayValue = value.match(/^\d+/) ? `${count}${suffix}` : value;

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl md:rounded-3xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.7,
        delay: delay / 1000,
        ease: [0.34, 1.56, 0.64, 1], // Spring effect
      }}
      whileHover={{
        y: prefersReducedMotion ? 0 : -12,
        scale: prefersReducedMotion ? 1 : 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: gradient }}
      />

      {/* Glow Effect */}
      <div
        className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
        style={{ background: gradient }}
      />

      {/* Content */}
      <div className="relative p-6 md:p-8 lg:p-10">
        {/* Icon */}
        <motion.div
          className="mb-4 md:mb-6 inline-flex"
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: (delay / 1000) + 0.2,
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          <motion.div
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-xl"
            whileHover={{
              scale: 1.15,
              rotate: 12,
              transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
            }}
          >
            <div className="text-white [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7 lg:[&>svg]:w-8 lg:[&>svg]:h-8">
              {icon}
            </div>
          </motion.div>
        </motion.div>

        {/* Number */}
        <motion.div
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 md:mb-3 tracking-tight leading-none"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: (delay / 1000) + 0.3,
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          {displayValue}
        </motion.div>

        {/* Label */}
        <motion.div
          className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (delay / 1000) + 0.4, duration: 0.5 }}
        >
          {label}
        </motion.div>

        {/* Sublabel */}
        <motion.div
          className="text-sm md:text-base text-white/80 font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ delay: (delay / 1000) + 0.5, duration: 0.5 }}
        >
          {sublabel}
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="mt-4 md:mt-6 h-1 bg-white/30 rounded-full"
          initial={{ width: '4rem' }}
          whileInView={{ width: '5rem' }}
          whileHover={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div 
          className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
          }}
        />
      </div>
    </motion.div>
  );
}