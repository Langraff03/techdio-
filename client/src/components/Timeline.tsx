import { ReactNode } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description?: string;
  index: number;
}

const TimelineItem = ({ year, title, institution, description, index }: TimelineItemProps) => {
  return (
    <div className="relative flex gap-8 group" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center z-10 shadow-lg group-hover:scale-125 transition-transform duration-300">
          <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
        </div>
        {/* Line */}
        <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-600 to-cyan-500 mt-2 opacity-30"></div>
      </div>

      {/* Content Card */}
      <div className="pb-12 flex-1">
        {/* Year Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-black mb-4 shadow-lg">
          <span>{year}</span>
        </div>

        {/* Card */}
        <div className="glass-card p-6 rounded-2xl border-2 border-blue-100 hover-3d group-hover:border-blue-300 transition-all duration-300">
          <h4 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h4>
          <p className="text-base font-bold text-blue-600 mb-3">
            {institution}
          </p>
          {description && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: Array<{
    year: string;
    title: string;
    institution: string;
    description?: string;
  }>;
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          index={index}
        />
      ))}
    </div>
  );
}