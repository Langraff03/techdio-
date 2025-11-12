import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { 
  staggerContainer, 
  staggerContainerFast, 
  staggerContainerSlow,
  reducedMotionVariants 
} from '@/lib/animation-variants';

interface StaggerContainerProps {
  children: ReactNode;
  speed?: 'fast' | 'normal' | 'slow';
  className?: string;
  delay?: number;
}

/**
 * Container que anima seus filhos em cascata (stagger effect)
 * Cada filho aparece com um pequeno delay em relação ao anterior
 */
export default function StaggerContainer({
  children,
  speed = 'normal',
  className,
  delay = 0,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  // Seleciona variante baseada na velocidade desejada
  const getVariants = () => {
    if (prefersReducedMotion) return reducedMotionVariants;
    
    switch (speed) {
      case 'fast':
        return staggerContainerFast;
      case 'slow':
        return staggerContainerSlow;
      default:
        return staggerContainer;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      variants={getVariants()}
      className={className}
      style={{ willChange: 'opacity' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}