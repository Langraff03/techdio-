import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedStatsCardProps {
  value: string;
  label: string;
  sublabel: string;
  icon: ReactNode;
  gradient: string;
  delay?: number;
}

export default function AnimatedStatsCard({ 
  value, 
  label, 
  sublabel, 
  icon, 
  gradient,
  delay = 0 
}: AnimatedStatsCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      // Extract number from value string
      const targetNumber = parseInt(value.replace(/\D/g, ''));
      const suffix = value.replace(/\d/g, '');
      
      if (isNaN(targetNumber)) {
        setCount(0);
        return;
      }

      const duration = 2000;
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const suffix = value.replace(/\d/g, '');
  const displayValue = value.match(/^\d+/) ? `${count}${suffix}` : value;

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: gradient }}
      />

      {/* Glow Effect */}
      <div
        className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
        style={{ background: gradient }}
      />

      {/* Content */}
      <div className="relative p-6 md:p-8 lg:p-10">
        {/* Icon */}
        <div className="mb-4 md:mb-6 inline-flex">
          <div
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          >
            <div className="text-white [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7 lg:[&>svg]:w-8 lg:[&>svg]:h-8">
              {icon}
            </div>
          </div>
        </div>

        {/* Number */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 md:mb-3 tracking-tight leading-none">
          {displayValue}
        </div>

        {/* Label */}
        <div className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight">
          {label}
        </div>

        {/* Sublabel */}
        <div className="text-sm md:text-base text-white/80 font-medium">
          {sublabel}
        </div>

        {/* Decorative Line */}
        <div className="mt-4 md:mt-6 h-1 w-16 md:w-20 bg-white/30 rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-white/50" />
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div 
          className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
          }}
        />
      </div>
    </div>
  );
}