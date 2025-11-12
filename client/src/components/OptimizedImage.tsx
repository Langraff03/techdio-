import { useState } from 'react';
import { tokens, cn } from '@/design-system/tokens';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  priority?: boolean;
}

/**
 * OptimizedImage - Componente de imagem otimizado
 * 
 * Features:
 * - Skeleton loader durante carregamento
 * - Fade in suave quando carregada
 * - Lazy loading automático (exceto priority)
 * - Suporte a WebP com fallback
 * 
 * @example
 * <OptimizedImage
 *   src="/hero-equipamentos.jpg"
 *   alt="Equipamentos clínicos TECHDIO"
 *   className="w-full h-full object-cover"
 *   priority
 * />
 */
export default function OptimizedImage({ 
  src, 
  alt, 
  className,
  skeletonClassName,
  priority = false 
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Gera versão WebP do src (se aplicável)
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const hasWebP = src !== webpSrc;
  
  return (
    <div className="relative w-full h-full">
      {/* Skeleton Loader */}
      {!loaded && !error && (
        <div 
          className={cn(
            "absolute inset-0 bg-white/5 animate-pulse",
            tokens.borderRadius.large,
            skeletonClassName
          )}
          aria-hidden="true"
        />
      )}
      
      {/* Image */}
      {hasWebP ? (
        <picture className="w-full h-full">
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            className={cn(
              "transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0",
              className
            )}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </picture>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            "transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}
      
      {/* Error Fallback */}
      {error && (
        <div 
          className={cn(
            "absolute inset-0 bg-white/5 flex items-center justify-center",
            tokens.borderRadius.large
          )}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm text-muted">Imagem indisponível</p>
          </div>
        </div>
      )}
    </div>
  );
}