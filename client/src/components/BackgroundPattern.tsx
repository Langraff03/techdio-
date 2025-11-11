interface BackgroundPatternProps {
  pattern?: 'dots' | 'grid' | 'none';
  className?: string;
}

export default function BackgroundPattern({ pattern = 'dots', className = '' }: BackgroundPatternProps) {
  if (pattern === 'none') return null;

  const patternClass = pattern === 'dots' ? 'bg-dots' : 'bg-grid';

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${patternClass} ${className}`}
      aria-hidden="true"
    />
  );
}