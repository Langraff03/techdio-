import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MetrologyInfoCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
  accentColor: string;
}

export default function MetrologyInfoCard({
  icon,
  title,
  description,
  benefits,
  gradient,
  accentColor
}: MetrologyInfoCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="glass-medium elevation-2 hover:elevation-3 p-6 md:p-8 rounded-3xl border-2 border-white/10 group transition-all duration-500 magnetic-card h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: prefersReducedMotion ? 0 : -8,
        transition: { duration: 0.3 }
      }}
      style={{
        background: `linear-gradient(135deg, ${accentColor}10, transparent)`,
        borderColor: `${accentColor}20`
      }}
    >
      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-4">
        <div 
          className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{
            filter: `drop-shadow(0 4px 12px ${accentColor}40)`
          }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-black text-primary group-hover:text-cyan-400 transition-colors title-card">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-base md:text-lg text-body body-text leading-relaxed mb-6">
        {description}
      </p>

      {/* Benefits List */}
      <div className="space-y-3">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div 
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shadow-lg"
              style={{ 
                background: gradient,
              }}
            >
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm md:text-base text-white/90 font-medium">
              {benefit}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Hover Border Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          padding: '2px',
          background: `linear-gradient(135deg, ${accentColor}60, transparent)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
    </motion.div>
  );
}