import { Variants } from 'framer-motion';

/**
 * Sistema centralizado de variantes de animação para Framer Motion
 * Garante consistência visual em todo o site
 */

// Easing curves personalizadas (cubic-bezier)
export const easings = {
  easeOut: [0.22, 1, 0.36, 1] as const,      // Entrada rápida, saída lenta
  spring: [0.34, 1.56, 0.64, 1] as const,    // Efeito spring/bounce
  easeInOut: [0.43, 0.13, 0.23, 0.96] as const, // Suave em ambos os lados
  smooth: [0.25, 0.46, 0.45, 0.94] as const, // Transição suave
};

// Durações padrão (em segundos)
export const durations = {
  fast: 0.3,       // Micro-interações
  normal: 0.6,     // Entrada/saída padrão
  slow: 1.0,       // Efeitos complexos
  verySlow: 1.5,   // Efeitos especiais
};

// ===== FADE VARIANTS =====

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 40
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0,
    y: -40
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0,
    x: -40
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0,
    x: 40
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

// ===== SCALE VARIANTS =====

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.spring,
    }
  }
};

export const scaleInSubtle: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

// ===== SLIDE VARIANTS =====

export const slideInLeft: Variants = {
  hidden: { 
    x: -100,
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    x: 100,
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

// ===== CONTAINER VARIANTS (para stagger) =====

export const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

export const staggerContainerSlow: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

// ===== HOVER VARIANTS =====

export const hoverLift = {
  rest: { 
    y: 0,
    scale: 1,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    }
  },
  hover: { 
    y: -8,
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.spring,
    }
  }
};

export const hoverScale = {
  rest: { 
    scale: 1,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easings.spring,
    }
  }
};

export const hoverGlow = {
  rest: { 
    boxShadow: '0 0 0 rgba(37, 99, 235, 0)',
    transition: {
      duration: durations.fast,
    }
  },
  hover: { 
    boxShadow: '0 0 30px rgba(37, 99, 235, 0.5)',
    transition: {
      duration: durations.fast,
    }
  }
};

// ===== TAP/CLICK VARIANTS =====

export const tapScale = {
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    }
  }
};

// ===== SPECIALIZED VARIANTS =====

// Para cards premium com efeito 3D
export const cardPremium: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

// Para stats com counter animation
export const statsCounter: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.spring,
    }
  }
};

// Para imagens que fazem zoom suave
export const imageZoom: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    }
  }
};

// Parallax effect (sutil)
export const parallax = (offset: number = 50) => ({
  rest: {
    y: 0,
  },
  scroll: {
    y: offset,
    transition: {
      ease: 'linear',
    }
  }
});

/**
 * Função helper para criar variantes personalizadas
 */
export const createVariant = (
  hiddenProps: Record<string, any>,
  visibleProps: Record<string, any>,
  duration: number = durations.normal,
  ease: readonly number[] = easings.easeOut
): Variants => ({
  hidden: hiddenProps,
  visible: {
    ...visibleProps,
    transition: {
      duration,
      ease: [...ease] as any, // Cast para resolver tipo readonly
    }
  }
});

/**
 * Variantes simplificadas para reduced motion
 */
export const reducedMotionVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.01, // Instantâneo
    }
  }
};