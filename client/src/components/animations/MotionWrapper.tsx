import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { reducedMotionVariants } from '@/lib/animation-variants';

interface MotionWrapperProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode;
  variants?: any;
  className?: string;
}

/**
 * Wrapper genérico para animações com Framer Motion
 * Respeita preferência de movimento reduzido do usuário
 */
export default function MotionWrapper({
  children,
  variants,
  className,
  ...motionProps
}: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  // Se usuário prefere movimento reduzido, usa variantes simplificadas
  const finalVariants = prefersReducedMotion ? reducedMotionVariants : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={finalVariants}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}