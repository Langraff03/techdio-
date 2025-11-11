import { useEffect, useRef, useState } from "react";

interface ExpertiseBarProps {
  label: string;
  percentage: number;
  delay?: number;
  icon?: React.ReactNode;
}

export default function ExpertiseBar({ label, percentage, delay = 0, icon }: ExpertiseBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        const duration = 1500;
        const steps = 60;
        const increment = percentage / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= percentage) {
            setCurrentPercentage(percentage);
            clearInterval(interval);
          } else {
            setCurrentPercentage(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div ref={barRef} className="space-y-3">
      {/* Label and Percentage */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && <div className="text-blue-600">{icon}</div>}
          <span className="text-base font-bold text-gray-900">{label}</span>
        </div>
        <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {currentPercentage}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-1000 ease-out shadow-lg"
          style={{
            width: `${currentPercentage}%`,
            boxShadow: isVisible ? '0 0 20px rgba(37, 99, 235, 0.5)' : 'none'
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}