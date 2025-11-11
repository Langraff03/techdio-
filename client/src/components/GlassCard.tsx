import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'default';
  hover3D?: boolean;
  glow?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '', 
  variant = 'light',
  hover3D = false,
  glow = false
}: GlassCardProps) {
  const variantClasses = {
    light: 'glass-card',
    dark: 'glass-dark',
    default: 'glass'
  };

  return (
    <div 
      className={cn(
        'rounded-2xl p-6 transition-all duration-400',
        variantClasses[variant],
        hover3D && 'hover-3d cursor-pointer',
        glow && 'glow-blue',
        className
      )}
    >
      {children}
    </div>
  );
}