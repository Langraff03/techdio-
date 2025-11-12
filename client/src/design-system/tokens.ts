/**
 * Design Tokens - TECHDIO Site
 * Sistema centralizado de design tokens para consistência visual
 */

export const tokens = {
  /**
   * Typography Scale
   * Classes de tamanho de texto responsivas
   */
  typography: {
    hero: 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl',
    section: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    subsection: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    card: 'text-xl sm:text-2xl md:text-3xl',
    body: 'text-base',
    bodyLarge: 'text-lg md:text-xl',
    small: 'text-sm',
  },

  /**
   * Typography Styles
   * Line-height e letter-spacing otimizados
   */
  typographyStyle: {
    display: 'title-display',      // Para títulos hero gigantes
    section: 'title-section',      // Para títulos de seções
    card: 'title-card',            // Para títulos de cards
    body: 'body-text',             // Para corpo de texto
    bodyLarge: 'body-text-large',  // Para parágrafos destacados
  },

  /**
   * Text Colors - Semantic
   * Cores de texto semânticas para dark theme
   */
  textColors: {
    primary: 'text-primary',       // rgba(255, 255, 255, 0.95)
    secondary: 'text-secondary',   // rgba(255, 255, 255, 0.85)
    body: 'text-body',             // rgba(255, 255, 255, 0.75)
    muted: 'text-muted',           // rgba(255, 255, 255, 0.60)
  },

  /**
   * Border Radius
   * Sistema consistente de arredondamento
   */
  borderRadius: {
    small: 'rounded-lg',      // badges, tags
    medium: 'rounded-2xl',    // cards, buttons
    large: 'rounded-3xl',     // sections, images
    full: 'rounded-full',     // círculos, pills
  },

  /**
   * Elevation System
   * Sistema de sombras em 4 níveis
   */
  elevation: {
    1: 'elevation-1',         // Sombra sutil
    2: 'elevation-2',         // Sombra média
    3: 'elevation-3',         // Sombra forte
    premium: 'elevation-premium', // Sombra premium com glow
  },

  /**
   * Glassmorphism Variants
   * 3 variantes de glass com contraste otimizado
   */
  glass: {
    strong: 'glass-strong',   // Maior opacidade (CTAs, contato)
    medium: 'glass-medium',   // Opacidade padrão (cards)
    subtle: 'glass-subtle',   // Menor opacidade (decoração)
  },

  /**
   * Spacing System
   * Espaçamentos padronizados
   */
  spacing: {
    card: {
      mobile: 'p-6',
      tablet: 'md:p-8',
      desktop: 'lg:p-10',
      all: 'p-6 md:p-8 lg:p-10',
    },
    section: {
      mobile: 'py-16',
      tablet: 'md:py-24',
      desktop: 'lg:py-32',
      all: 'py-16 md:py-24 lg:py-32',
    },
    gap: {
      small: 'gap-3 md:gap-4',
      medium: 'gap-4 md:gap-6 lg:gap-8',
      large: 'gap-6 md:gap-8',
    },
  },

  /**
   * Hover Effects
   */
  hover: {
    lift: 'hover-lift',           // Levanta 8px
    lift3d: 'hover-3d',           // Levanta 12px com scale
    scale: 'hover-scale',         // Scale suave com translateY
  },

  /**
   * Gradients
   */
  gradients: {
    primary: 'gradient-primary',  // Blue → Cyan
    hero: 'gradient-hero',        // Dark blue gradient
    text: 'gradient-text',        // White → Blue text
  },

  /**
   * Glow Effects
   */
  glow: {
    blue: 'glow-blue',
    cyan: 'glow-cyan',
    purple: 'glow-purple',
  },
} as const;

/**
 * Utility function para combinar tokens
 * Exemplos de uso:
 * 
 * import { tokens, cn } from '@/design-system/tokens';
 * 
 * <h1 className={cn(
 *   tokens.typography.hero,
 *   tokens.typographyStyle.display,
 *   tokens.textColors.primary,
 *   "font-black"
 * )}>
 *   Título Hero
 * </h1>
 * 
 * <div className={cn(
 *   tokens.glass.medium,
 *   tokens.borderRadius.large,
 *   tokens.elevation[2],
 *   tokens.spacing.card.all,
 *   tokens.hover.scale
 * )}>
 *   Card Premium
 * </div>
 */

// Re-export cn from utils para conveniência
export { cn } from '@/lib/utils';