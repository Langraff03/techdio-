import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  reducedMotionVariants,
} from '@/lib/animation-variants';

type AnimationVariant = 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

/**
 * Enhanced ScrollReveal component usando Framer Motion
 * Anima elementos quando entram no viewport
 * 
 * @param variant - Tipo de animação ('fadeInUp', 'fadeInDown', etc.)
 * @param delay - Delay antes da animação iniciar (em segundos)
 * @param duration - Duração da animação (em segundos)
 * @param threshold - Porcentagem do elemento visível para trigger (0-1)
 * @param once - Se true, anima apenas uma vez
 */
export default function ScrollReveal({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration,
  threshold = 0.1,
  once = true,
  className = '',
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Seleciona a variante de animação
  const getVariants = (): Variants => {
    if (prefersReducedMotion) return reducedMotionVariants;

    switch (variant) {
      case 'fadeInUp':
        return fadeInUp;
      case 'fadeInDown':
        return fadeInDown;
      case 'fadeInLeft':
        return fadeInLeft;
      case 'fadeInRight':
        return fadeInRight;
      case 'scaleIn':
        return scaleIn;
      default:
        return fadeInUp;
    }
  };

  const variants = getVariants();

  // Configuração de transição customizada
  const transitionConfig = duration
    ? { delay, duration }
    : { delay };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: threshold,
        margin: '0px 0px -50px 0px', // Começa a animar 50px antes
      }}
      variants={variants}
      transition={transitionConfig}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}