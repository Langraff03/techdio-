interface CardSkeletonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'premium' | 'stat';
  className?: string;
}

/**
 * Skeleton loading para cards
 * Mantém layout para evitar CLS (Cumulative Layout Shift)
 */
export default function CardSkeleton({
  size = 'medium',
  variant = 'default',
  className = '',
}: CardSkeletonProps) {
  // Classes base com shimmer effect
  const baseClasses = 'animate-pulse bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-2xl';

  // Tamanhos
  const sizeClasses = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-96 md:h-[600px]',
  };

  // Renderiza baseado na variante
  if (variant === 'premium') {
    return (
      <div className={`${sizeClasses[size]} ${className} relative overflow-hidden rounded-3xl`}>
        {/* Background shimmer */}
        <div className={baseClasses + ' absolute inset-0'} />
        
        {/* Content skeleton */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          {/* Badge no topo */}
          <div className="flex justify-end">
            <div className="w-32 h-8 bg-slate-600 rounded-full animate-pulse" />
          </div>
          
          {/* Conteúdo inferior */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-slate-600 rounded-2xl animate-pulse" />
            <div className="w-3/4 h-8 bg-slate-600 rounded animate-pulse" />
            <div className="w-32 h-12 bg-slate-600 rounded animate-pulse" />
            <div className="w-full h-6 bg-slate-600 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'stat') {
    return (
      <div className={`${className} p-6 md:p-8 rounded-3xl ${baseClasses}`}>
        {/* Icon */}
        <div className="mb-4 w-14 h-14 bg-slate-600 rounded-xl animate-pulse" />
        
        {/* Number */}
        <div className="mb-2 w-24 h-12 bg-slate-600 rounded animate-pulse" />
        
        {/* Label */}
        <div className="mb-2 w-32 h-6 bg-slate-600 rounded animate-pulse" />
        
        {/* Sublabel */}
        <div className="w-24 h-4 bg-slate-600 rounded animate-pulse" />
      </div>
    );
  }

  // Default variant
  return (
    <div className={`${sizeClasses[size]} ${className} ${baseClasses} p-6`}>
      <div className="space-y-4 h-full flex flex-col">
        {/* Header */}
        <div className="w-3/4 h-6 bg-slate-600 rounded animate-pulse" />
        
        {/* Content lines */}
        <div className="flex-1 space-y-3">
          <div className="w-full h-4 bg-slate-600 rounded animate-pulse" />
          <div className="w-5/6 h-4 bg-slate-600 rounded animate-pulse" />
          <div className="w-4/6 h-4 bg-slate-600 rounded animate-pulse" />
        </div>
        
        {/* Footer */}
        <div className="w-32 h-10 bg-slate-600 rounded animate-pulse" />
      </div>
    </div>
  );
}