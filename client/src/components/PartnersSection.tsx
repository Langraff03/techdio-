import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import BackgroundPattern from '@/components/BackgroundPattern';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Logos dos parceiros
const partners = [
  { id: 1, name: 'Parceiro 1', logo: '/parceiros/parceiro1.png' },
  { id: 2, name: 'Parceiro 2', logo: '/parceiros/parceiro2.png' },
  { id: 3, name: 'Parceiro 3', logo: '/parceiros/39bf0520-11fb-4f09-9352-38fd6aef0dd9.png' },
  { id: 4, name: 'Parceiro 4', logo: '/parceiros/parceiro4.png.png' },
];

export default function PartnersSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="parceiros" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <BackgroundPattern pattern="grid" className="opacity-5" />
      
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-xl mb-8 badge-glow">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-base font-black text-white tracking-wider uppercase">Nossos Parceiros</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Parcerias de <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Excelência</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Trabalhamos com as principais empresas e instituições do setor
            </p>
          </div>
        </ScrollReveal>

        {/* Partners Grid */}
        <StaggerContainer speed="fast" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              className="group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                scale: prefersReducedMotion ? 1 : 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="glass-medium elevation-2 hover:elevation-3 p-6 md:p-8 rounded-3xl border-2 border-white/10 hover:border-white/20 transition-all duration-300 aspect-square flex items-center justify-center relative overflow-hidden bg-white/5">
                {/* Logo do parceiro */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA Section */}
        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-lg text-white/70 mb-4">
              Interessado em se tornar um parceiro?
            </p>
            <a
              href="mailto:techdio.qualidade@gmail.com?subject=Parceria Comercial"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>Entre em contato</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}