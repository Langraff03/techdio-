import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PremiumAreaCardProps {
  title: string;
  description: string;
  stats: string;
  statsLabel: string;
  equipment: string[];
  badge: string;
  badgeIcon?: ReactNode;
  image?: string;
  gradient: string;
  icon: ReactNode;
  accentColor: string;
}

export default function PremiumAreaCard({
  title,
  description,
  stats,
  statsLabel,
  equipment,
  badge,
  badgeIcon,
  image,
  gradient,
  icon,
  accentColor
}: PremiumAreaCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl md:rounded-3xl h-[500px] md:h-[600px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: prefersReducedMotion ? 0 : -16,
        transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Background Image with Overlay */}
      {image ? (
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={image}
            className="w-full h-full object-cover"
            alt={title}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 1.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            style={{ willChange: 'transform' }}
          />
          {/* Gradient Overlay - mais forte */}
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(180deg, 
                transparent 0%, 
                ${gradient}40 30%, 
                ${gradient}90 70%, 
                ${gradient} 100%
              )`
            }}
          />
        </div>
      ) : (
        <div 
          className="absolute inset-0"
          style={{ background: gradient }}
        />
      )}

      {/* Glow Effect on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ background: `radial-gradient(circle at center, ${accentColor}30, transparent 70%)` }}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col p-8 text-white">
        {/* Top Section - Badge */}
        <div className="flex justify-end mb-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 shadow-lg">
            {badgeIcon && <span className="text-base">{badgeIcon}</span>}
            <span className="text-sm font-bold">{badge}</span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Bottom Section - Info */}
        <div className="space-y-6">
          {/* Icon Container */}
          <motion.div
            className="inline-flex"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{
                scale: 1.1,
                rotate: 6,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="[&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10"
                whileHover={{ scale: 1.1 }}
              >
                {icon}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {title}
          </motion.h3>

          {/* Stats - Número grande */}
          <motion.div
            className="flex items-baseline gap-2 md:gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              {stats}
            </div>
            <div className="text-base md:text-lg lg:text-xl font-bold opacity-90">
              {statsLabel}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg lg:text-xl leading-relaxed opacity-95 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.95, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Border Gradient on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          padding: '2px',
          background: `linear-gradient(135deg, ${accentColor}80, transparent)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
    </motion.div>
  );
}