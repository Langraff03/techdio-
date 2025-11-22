// Custom SVG Icons for TECHDIO Website

// Área de Atuação Icons
export const HealthCareIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2"/>
    <path d="M32 16V48M16 32H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="6" fill="currentColor"/>
    <path d="M32 10L35 18L43 18L37 23L39 31L32 26L25 31L27 23L21 18L29 18L32 10Z" fill="currentColor" opacity="0.3"/>
  </svg>
);
// Eletromédicos - Equipamentos eletrônicos hospitalares
export const ElectromedicalIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 20L28 26L36 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="20" y="40" width="6" height="12" rx="1" fill="currentColor"/>
    <rect x="29" y="40" width="6" height="12" rx="1" fill="currentColor"/>
    <rect x="38" y="40" width="6" height="12" rx="1" fill="currentColor"/>
    <circle cx="32" cy="24" r="2" fill="currentColor"/>
    <path d="M32 12V8M32 36V40M16 24H12M48 24H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Fisioterapia - Equipamentos de reabilitação
export const PhysiotherapyIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 22V36M24 28L32 32L40 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 36L22 52M38 36L42 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 50H24M40 50H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="3" fill="currentColor"/>
    <path d="M28 40C28 40 30 42 32 42C34 42 36 40 36 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Estética - Equipamentos estéticos
export const AestheticIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="28" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 14V18M32 38V42M18 28H22M42 28H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M26 26L28 24M38 26L36 24M26 30L28 32M38 30L36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 48L26 52H38L40 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="26" y="42" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);


export const VeterinaryIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 48C32 48 44 42 44 32C44 26 40 22 36 22C34 22 32 24 32 24C32 24 30 22 28 22C24 22 20 26 20 32C20 42 32 48 32 48Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <circle cx="24" cy="20" r="4" fill="currentColor"/>
    <circle cx="40" cy="20" r="4" fill="currentColor"/>
    <circle cx="18" cy="28" r="3.5" fill="currentColor"/>
    <circle cx="46" cy="28" r="3.5" fill="currentColor"/>
    <path d="M28 38C28 38 30 40 32 40C34 40 36 38 36 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IndustryIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 28L12 52L52 52L52 20L32 20L32 28L12 28Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <rect x="16" y="32" width="6" height="6" fill="currentColor" opacity="0.6"/>
    <rect x="26" y="32" width="6" height="6" fill="currentColor" opacity="0.6"/>
    <rect x="16" y="42" width="6" height="6" fill="currentColor" opacity="0.6"/>
    <rect x="26" y="42" width="6" height="6" fill="currentColor" opacity="0.6"/>
    <path d="M38 20L38 12L48 12L48 20" stroke="currentColor" strokeWidth="2"/>
    <path d="M38 28L38 36L48 36L48 28" stroke="currentColor" strokeWidth="2"/>
    <circle cx="43" cy="16" r="1.5" fill="currentColor"/>
  </svg>
);

// Odontológico - Equipamentos odontológicos
export const DentalIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 16C28 16 24 18 24 24C24 28 24 36 26 42C27 45 28 48 30 48C31 48 32 46 32 44C32 42 32 38 32 36C32 38 32 42 32 44C32 46 33 48 34 48C36 48 37 45 38 42C40 36 40 28 40 24C40 18 36 16 36 16C34 14 30 14 28 16Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <circle cx="28" cy="20" r="2" fill="currentColor"/>
    <circle cx="36" cy="20" r="2" fill="currentColor"/>
    <path d="M26 28C26 28 28 30 30 30C32 30 34 28 34 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 28C38 28 36 30 34 30C32 30 30 28 30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Certification Badge Icons
export const ISOBadgeIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1"/>
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 16L36 26L47 27L39 35L41 46L32 41L23 46L25 35L17 27L28 26L32 16Z" fill="currentColor"/>
    <circle cx="32" cy="32" r="8" fill="white"/>
    <text x="32" y="36" fontSize="8" fill="currentColor" textAnchor="middle" fontWeight="bold">ISO</text>
  </svg>
);

export const INMETROBadgeIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L48 20L48 44L32 56L16 44L16 20L32 8Z" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="12" fill="currentColor"/>
    <path d="M28 32L30 34L36 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RBCBadgeIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="4" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 42L32 38L40 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="28" r="3" fill="currentColor"/>
  </svg>
);

export const ANVISABadgeIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L52 24V44L32 56L12 44V24L32 8Z" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 20V44M20 32H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="5" fill="currentColor"/>
  </svg>
);

export const UTFPRBadgeIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 16L32 48M24 24L40 24M24 40L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="6" fill="currentColor"/>
    <path d="M26 32L32 26L38 32L32 38L26 32Z" fill="white"/>
  </svg>
);

export const ABNTBadgeIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="16" width="32" height="32" rx="2" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 28L28 36L32 28L36 36L40 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IEEEBadgeIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 28C20 28 24 32 28 32C32 32 32 28 36 28C40 28 44 32 44 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M20 36C20 36 24 40 28 40C32 40 32 36 36 36C40 36 44 40 44 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

export const SBPCBadgeIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12L42 24L42 40L32 52L22 40L22 24L32 12Z" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="28" r="4" fill="currentColor"/>
    <path d="M28 36L32 40L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 42L32 44L38 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Competitive Advantage Icons
export const ExperienceIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
    <path d="M32 16L35 26L45 27L37 35L39 45L32 40L25 45L27 35L19 27L29 26L32 16Z" fill="currentColor"/>
    <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const PerformanceIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="42" width="8" height="10" fill="currentColor" opacity="0.3"/>
    <rect x="24" y="32" width="8" height="20" fill="currentColor" opacity="0.5"/>
    <rect x="36" y="22" width="8" height="30" fill="currentColor" opacity="0.7"/>
    <rect x="48" y="12" width="8" height="40" fill="currentColor"/>
    <path d="M16 38L28 28L40 18L52 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TraceabilityIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.3"/>
    <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="8" fill="currentColor"/>
    <path d="M32 8V24M32 40V56M8 32H24M40 32H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const GlobalStandardsIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 32C12 32 20 24 32 24C44 24 52 32 52 32" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 32C12 32 20 40 32 40C44 40 52 32 52 32" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="6" fill="currentColor"/>
    <path d="M32 14V50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

export const PersonalizedServiceIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <path d="M16 52C16 52 20 40 32 40C44 40 48 52 48 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 42L32 48L42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

export const InfrastructureIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="32" width="40" height="20" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <rect x="20" y="36" width="6" height="6" fill="currentColor" opacity="0.5"/>
    <rect x="30" y="36" width="6" height="6" fill="currentColor" opacity="0.5"/>
    <rect x="40" y="36" width="6" height="6" fill="currentColor" opacity="0.5"/>
    <path d="M16 32L32 16L48 32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="32" cy="20" r="2" fill="currentColor"/>
  </svg>
);