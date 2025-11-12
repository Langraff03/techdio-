import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  reducedMotionVariants,
} from '@/lib/animation-variants';

type FadeDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * Componente de animação FadeIn com múltiplas direções
 * Suporta fade-in simples ou com movimento direcional
 */
export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration,
  className,
  once = true,
  ...motionProps
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  // Seleciona a variante baseada na direção
  const getVariants = () => {
    if (prefersReducedMotion) return reducedMotionVariants;

    switch (direction) {
      case 'up':
        return fadeInUp;
      case 'down':
        return fadeInDown;
      case 'left':
        return fadeInLeft;
      case 'right':
        return fadeInRight;
      case 'none':
        return fadeIn;
      default:
        return fadeInUp;
    }
  };

  const variants = getVariants();

  // Cria transição customizada se duração for especificada
  const transitionProps = duration
    ? { delay, duration }
    : { delay };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '0px 0px -100px 0px' }}
      variants={variants}
      transition={transitionProps}
      className={className}
      style={{ willChange: 'opacity, transform' }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}