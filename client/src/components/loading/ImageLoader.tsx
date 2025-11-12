import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  onLoad?: () => void;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
}

/**
 * Component para carregar imagens com lazy loading e blur placeholder
 * Mostra uma versão blur enquanto carrega a imagem completa
 */
export default function ImageLoader({
  src,
  alt,
  className = '',
  blurDataURL,
  onLoad,
  priority = false,
  objectFit = 'cover',
}: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (priority) return;

    // Intersection Observer para lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Começa a carregar 50px antes de entrar na tela
      }
    );

    const element = document.getElementById(`img-${src}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const animationDuration = prefersReducedMotion ? 0.01 : 0.6;

  return (
    <div 
      id={`img-${src}`}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: '#1e293b' }}
    >
      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-xl scale-110"
          style={{
            backgroundImage: `url(${blurDataURL})`,
          }}
        />
      )}

      {/* Loading skeleton se não há blur placeholder */}
      {!blurDataURL && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
      )}

      {/* Imagem real */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-${objectFit}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: animationDuration }}
          onLoad={handleLoad}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{ willChange: 'opacity' }}
        />
      )}

      {/* Loading indicator */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      )}
    </div>
  );
}