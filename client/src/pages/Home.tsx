import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Check, Activity, Heart, Cpu, TrendingUp, Shield, Users, Instagram, ChevronDown, Info, Wrench, Target, Package, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { APP_LOGO } from "@/const";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import BackgroundPattern from "@/components/BackgroundPattern";
import FloatingParticles from "@/components/FloatingParticles";
import PremiumAreaCard from "@/components/PremiumAreaCard";
import AnimatedStatsCard from "@/components/AnimatedStatsCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MetrologyInfoCard from "@/components/MetrologyInfoCard";
import PartnersSection from "@/components/PartnersSection";
import BrazilCoverageMap from "@/components/BrazilCoverageMap";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import {
  ElectromedicalIcon,
  PhysiotherapyIcon,
  AestheticIcon,
  IndustryIcon,
  DentalIcon,
} from "@/components/icons/CustomIcons";

// Custom SVG Icons for services
const MaintenanceIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L48 16V32C48 44.6274 40 54 32 58C24 54 16 44.6274 16 32V16L32 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 32L30.5 34.5L36 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalibrationIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 12V52M12 32H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <path d="M32 20L35 26M32 44L35 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  // Navigation items with icons
  const navItems = [
    { id: 'sobre', label: 'Sobre', icon: Info },
    { id: 'servicos', label: 'Serviços', icon: Wrench },
    { id: 'areas', label: 'Áreas', icon: Target },
    { id: 'equipamentos', label: 'Equipamentos', icon: Package },
    { id: 'contato', label: 'Contato', icon: MessageCircle }
  ];

  const scrollToSection = (id: string) => {
    // Se for a página de equipamentos, redirecionar
    if (id === 'equipamentos') {
      setLocation('/equipamentos');
      setMobileMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const whatsappNumber = "5544997014422";
    const message = "Olá! Gostaria de solicitar um orçamento para calibração/manutenção de equipamentos.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* WhatsApp Flutuante */}
      <FloatingWhatsApp />
      
      {/* Header Branco - Não fixo */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-20 md:h-28">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="TECHDIO Logo" className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto drop-shadow-md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative flex items-center gap-2 px-4 py-2.5 text-base lg:text-lg font-bold text-gray-900 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 group-hover:text-cyan-600 transition-colors duration-300" />
                  <span className="group-hover:text-blue-700 transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              className="btn-shine hidden md:inline-flex gradient-primary text-white font-bold shadow-lg hover:shadow-premium-lg hover:scale-105 transition-all duration-300 glow-blue"
              size="lg"
              onClick={openWhatsApp}
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container py-4 flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-900 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-md hover:scale-102"
                  >
                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-cyan-600 transition-colors duration-300" />
                    <span className="group-hover:text-blue-700 transition-colors duration-300">
                      {item.label}
                    </span>
                  </button>
                );
              })}
              <Button
                className="btn-shine w-full gradient-primary text-white font-bold mt-2"
                onClick={openWhatsApp}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section - Ultra Professional */}
        <section className="relative overflow-hidden gradient-hero min-h-[600px] md:min-h-[85vh] flex items-center py-12 md:py-20">
          <BackgroundPattern pattern="dots" className="opacity-20" />
          <FloatingParticles />
          
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-950/40"></div>
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6 md:space-y-10 animate-fade-in-up">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/30 rounded-full backdrop-blur-xl shadow-lg badge-glow">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-base font-bold text-white tracking-wide">ENGENHARIA DE PRECISÃO</span>
                </div>
                
                {/* Main Heading - More Impact */}
                <div className="space-y-2 md:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black title-display">
                    Tecnologia
                  </h1>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black title-display">
                    <span className="animated-gradient-text">
                      Integrada
                    </span>
                  </h1>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black title-display">
                    à Saúde
                  </h1>
                </div>
                
                {/* Subtitle with more personality */}
                <p className="text-lg md:text-xl lg:text-2xl text-secondary body-text-large max-w-2xl font-light">
                  Calibração, manutenção e consultoria de equipamentos clínicos com
                  <span className="font-semibold text-cyan-300"> qualidade excepcional</span> e
                  <span className="font-semibold text-cyan-300"> tecnologia de ponta</span>.
                </p>
                
                {/* CTAs with more presence */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-4 md:pt-6">
                  <Button
                    size="lg"
                    className="btn-shine gradient-primary text-white font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-premium-lg hover:scale-105 transition-all duration-300 glow-blue group"
                    onClick={openWhatsApp}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/40 text-white hover:bg-white/15 font-bold text-lg px-8 py-6 backdrop-blur-xl"
                    onClick={() => scrollToSection("servicos")}
                  >
                    Nossos Serviços
                  </Button>
                </div>

                {/* Premium Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-12">
                  {[
                    { value: '10+', label: 'Anos de Excelência', sublabel: 'No mercado' },
                    { value: 'ISO', label: 'Certificação', sublabel: 'Internacional' },
                    { value: '100%', label: 'Satisfação', sublabel: 'Garantida' }
                  ].map((stat, i) => (
                    <div key={i} className="group">
                      <div className="glass border border-white/20 rounded-2xl p-4 md:p-6 text-center hover-3d backdrop-blur-xl">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                        <div className="text-xs text-white/60">{stat.sublabel}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image - More Professional */}
              <div className="relative animate-fade-in lg:ml-12">
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  {/* Image container with premium styling */}
                  <div className="relative overflow-hidden rounded-3xl shadow-premium-lg hover-lift border-4 border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-cyan-500/30 z-10"></div>
                    <img
                      src="/hero-equipamentos.jpg"
                      alt="Equipamentos clínicos profissionais calibrados pela TECHDIO - Tecnologia integrada à saúde"
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                    
                    {/* Floating Badge on Image */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="glass border border-white/30 rounded-2xl p-4 backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                          <span className="text-white font-bold text-sm">Equipamentos Certificados e Auditados</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section - DARK THEME */}
        <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <BackgroundPattern pattern="grid" className="opacity-10" />
          
          {/* Decorative gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            {/* Header Section */}
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-xl mb-6 md:mb-8 badge-glow">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-sm font-black text-white tracking-wider uppercase">Sobre a TECHDIO</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 title-section text-primary">
                  Liderança em<br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Tecnologia Médica
                  </span>
                </h2>

                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="h-2 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                </div>

                <p className="text-lg md:text-xl lg:text-2xl text-secondary body-text-large font-light max-w-4xl mx-auto px-4">
                  Especialistas em tecnologia integrada à saúde, oferecendo
                  <span className="font-semibold text-cyan-300"> soluções completas</span> em calibração,
                  manutenção preventiva e preditiva de equipamentos
                  <span className="font-semibold text-cyan-300"> clínicos, veterinários e industriais</span>.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats Grid - DARK VERSION with Stagger */}
            <ScrollReveal delay={100}>
              <StaggerContainer speed="normal" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-6xl mx-auto">
                {[
                  { number: '15+', label: 'Anos de Experiência', desc: 'Mestrado e especialização', icon: '🏆' },
                  { number: 'ISO', label: 'Certificação', desc: 'Padrões internacionais', icon: '✓' },
                  { number: '500+', label: 'Equipamentos', desc: 'Calibrados anualmente', icon: '⚙️' }
                ].map((stat, i) => (
                  <ScrollReveal key={i} variant="scaleIn" delay={i * 0.1}>
                    <div className="group">
                    <div className="glass-medium elevation-2 hover:elevation-3 p-6 md:p-8 rounded-3xl border-2 border-white/10 hover:border-cyan-500/50 transition-all duration-500 relative overflow-hidden magnetic-card">
                      <div className="absolute top-0 right-0 text-8xl opacity-5">{stat.icon}</div>
                      <div className="relative z-10">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                          {stat.number}
                        </div>
                        <div className="text-lg md:text-xl font-bold text-primary mb-2">{stat.label}</div>
                        <div className="text-xs md:text-sm text-muted font-medium">{stat.desc}</div>
                      </div>
                    </div>
                    </div>
                  </ScrollReveal>
                ))}
              </StaggerContainer>
            </ScrollReveal>

            {/* Main Content Grid - DARK VERSION - Transform to Accordion on Mobile */}
            <div className="max-w-7xl mx-auto mb-12 md:mb-16">
              {/* Desktop: Grid Layout */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-8">
                <ScrollReveal delay={200}>
                  <div className="glass-medium elevation-2 hover:elevation-3 p-10 rounded-3xl border-2 border-white/10 hover:border-blue-500/50 group transition-all duration-500 h-full magnetic-card">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform">
                        🎓
                      </div>
                      <h3 className="text-3xl font-black text-primary group-hover:text-cyan-400 transition-colors title-card">
                        Mestrado em Inovações Tecnológicas
                      </h3>
                    </div>
                    <p className="text-lg text-body body-text leading-relaxed mb-6">
                      Liderança com formação acadêmica de excelência pela UTFPR, trazendo conhecimento técnico e científico de ponta para cada projeto. Engenheiro em Eletrônica com ênfase em engenharia clínica e mestrado em engenharia de inovações tecnológicas. Especialização em tecnologia aplicada à saúde e metrologia avançada. CREA-PR 196357/D
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <span className="text-sm font-bold text-cyan-300">UTFPR 2023</span>
                      </div>
                      <div className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <span className="text-sm font-bold text-cyan-300">Pesquisa & Inovação</span>
                      </div>
                      <div className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <span className="text-sm font-bold text-cyan-300">Eng. Clínica</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="glass-medium elevation-2 hover:elevation-3 p-10 rounded-3xl border-2 border-white/10 hover:border-cyan-500/50 group transition-all duration-500 h-full magnetic-card">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform">
                        ⭐
                      </div>
                      <h3 className="text-3xl font-black text-primary group-hover:text-cyan-400 transition-colors title-card">
                        Conformidade e Excelência
                      </h3>
                    </div>
                    <p className="text-lg text-body body-text leading-relaxed mb-6">
                      Certificação ISO/IEC 17025 e compliance com padrões internacionais de qualidade, garantindo processos auditados e rastreáveis. Compromisso com excelência operacional em cada serviço prestado.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                        <span className="text-sm font-bold text-cyan-300">ISO/IEC 17025</span>
                      </div>
                      <div className="px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                        <span className="text-sm font-bold text-cyan-300">INMETRO/RBC</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Mobile: Accordion Layout */}
              <div className="lg:hidden">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="formacao" className="bg-white/5 backdrop-blur-xl rounded-2xl border-2 border-white/10 px-6 overflow-hidden">
                    <AccordionTrigger className="text-white hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
                          🎓
                        </div>
                        <span className="text-xl font-black text-left">Mestrado em Inovações Tecnológicas</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-6">
                      <p className="text-base leading-relaxed mb-4">
                        Liderança com formação acadêmica de excelência pela UTFPR, trazendo conhecimento técnico e científico de ponta para cada projeto. Engenheiro em Eletrônica com ênfase em engenharia clínica e mestrado em engenharia de inovações tecnológicas. Especialização em tecnologia aplicada à saúde e metrologia avançada. CREA-PR 196357/D
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1.5 bg-blue-500/20 rounded-full border border-blue-500/30">
                          <span className="text-xs font-bold text-cyan-300">UTFPR 2023</span>
                        </div>
                        <div className="px-3 py-1.5 bg-blue-500/20 rounded-full border border-blue-500/30">
                          <span className="text-xs font-bold text-cyan-300">Pesquisa & Inovação</span>
                        </div>
                        <div className="px-3 py-1.5 bg-blue-500/20 rounded-full border border-blue-500/30">
                          <span className="text-xs font-bold text-cyan-300">Eng. Clínica</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="certificacao" className="bg-white/5 backdrop-blur-xl rounded-2xl border-2 border-white/10 px-6 overflow-hidden">
                    <AccordionTrigger className="text-white hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center text-2xl shadow-lg">
                          ⭐
                        </div>
                        <span className="text-xl font-black text-left">Conformidade e Excelência</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-6">
                      <p className="text-base leading-relaxed mb-4">
                        Certificação ISO/IEC 17025 e compliance com padrões internacionais de qualidade, garantindo processos auditados e rastreáveis. Compromisso com excelência operacional em cada serviço prestado.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1.5 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                          <span className="text-xs font-bold text-cyan-300">ISO/IEC 17025</span>
                        </div>
                        <div className="px-3 py-1.5 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                          <span className="text-xs font-bold text-cyan-300">INMETRO/RBC</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Additional Value Props - DARK VERSION with Stagger */}
            <ScrollReveal delay={400}>
              <StaggerContainer speed="fast" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
                {[
                  {
                    icon: '🔬',
                    title: 'Laboratório Próprio',
                    desc: 'Infraestrutura completa com equipamentos de última geração para calibração e testes'
                  },
                  {
                    icon: '🚚',
                    title: 'Logística Integrada',
                    desc: 'Serviço de coleta e entrega com grande estoque de peças para atendimento rápido'
                  },
                  {
                    icon: '📊',
                    title: 'Gestão de Qualidade',
                    desc: 'Sistema completo de rastreabilidade e documentação técnica detalhada'
                  }
                ].map((item, i) => (
                  <ScrollReveal key={i} variant="fadeInUp" delay={i * 0.1}>
                    <div className="glass-medium elevation-2 hover:elevation-3 p-6 md:p-8 rounded-3xl border-2 border-white/10 hover:border-purple-500/50 group transition-all duration-500 magnetic-card">
                    <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-lg md:text-xl font-black text-primary mb-2 md:mb-3 group-hover:text-purple-400 transition-colors title-card">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-body body-text leading-relaxed">
                      {item.desc}
                    </p>
                    </div>
                  </ScrollReveal>
                ))}
              </StaggerContainer>
            </ScrollReveal>
          </div>
        </section>

        {/* Serviços Overview Section - DARK */}
        <section id="servicos" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
          <BackgroundPattern pattern="dots" className="opacity-5" />
          
          <div className="container relative z-10">
            <ScrollReveal>
              <div className="mb-12 md:mb-16 text-center">
                <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl mb-8 md:mb-10 badge-glow">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-base font-black text-white tracking-wider uppercase">Nossos Serviços</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black title-section text-primary mb-4">
                  Soluções <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Completas</span>
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: MaintenanceIcon,
                  title: "Manutenção",
                  desc: "Preventiva e corretiva com expertise técnica completa",
                  image: "/servico-manutencao.jpg"
                },
                {
                  icon: CalibrationIcon,
                  title: "Calibração",
                  desc: "Precisão com padrões acreditados e certificação",
                  image: "/servico-calibracao.jpg"
                }
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="glass-medium elevation-2 hover:elevation-premium overflow-hidden p-0 group cursor-pointer rounded-3xl border-2 border-white/10 hover:border-cyan-500/50 transition-all duration-500 magnetic-card">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={service.image}
                          alt={`${service.title} - Serviços TECHDIO de calibração e manutenção`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                      </div>
                      <div className="p-8">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <Icon />
                        </div>
                        <h3 className="text-3xl font-black mb-3 text-primary group-hover:text-cyan-400 transition-colors title-card">{service.title}</h3>
                        <p className="text-body leading-relaxed text-lg body-text">{service.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Service Sections - Desktop: Full Sections, Mobile: Tabs */}
        
        {/* Desktop Version - Full Sections */}
        <div className="hidden md:block">
          {[
            {
              id: 'manutencao-preventiva',
              title: 'Manutenção Preventiva',
              description: 'Com a manutenção preventiva, você tem a tranquilidade de saber que seus equipamentos estão sempre em dia, prontos para atender às suas demandas.',
              benefits: [
                'Logística própria',
                'Grande estoque de peças',
                '+ de 70 itens verificados',
                'Laboratório de ponta',
                'Nota de conformidade de acordo com a normativa RDC nº 611/22'
              ],
              highlight: 'A manutenção preventiva é, em média, 10% do preço da manutenção corretiva!',
              image: '/servico-manutencao.jpg',
              reversed: false
            },
            {
              id: 'manutencao-corretiva',
              title: 'Manutenção Corretiva',
              description: 'Ideal para situações urgentes, a manutenção corretiva garante que seus equipamentos voltam a operar sem comprometer sua rotina de trabalho.',
              benefits: [
                'Atendimento emergencial',
                'Reparos especializados',
                'Suporte técnico disponível Suporte 24 horas',
                'Garantia de peças e serviços',
                'Soluções rápidas',
                'Infraestrutura para armazenagem',
                'Pagamento Facilitado'
              ],
              highlight: 'A manutenção corretiva evita prejuízos e retoma suas operações com agilidade!',
              image: '/servico-manutencao.jpg',
              reversed: true
            },
            {
              id: 'calibracao',
              title: 'Calibração de Precisão',
              description: 'Nossa calibração segue padrões internacionais acreditados, garantindo a precisão e confiabilidade dos seus equipamentos.',
              benefits: [
                'Padrões acreditados pela RBC',
                'Conformidade ISO/IEC 17025',
                'Certificados rastreáveis',
                'Rastreabilidade ao INMETRO',
                'Equipamentos de alta precisão',
                'Conformidade com normas ANVISA'
              ],
              highlight: 'Calibração certificada que garante a confiabilidade dos seus resultados!',
              image: '/servico-calibracao.jpg',
              reversed: false
            },
          ].map((service, idx) => (
            <section
              key={service.id}
              className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
            >
              <BackgroundPattern pattern="grid" className="opacity-5" />
              
              <div className="container">
                <ScrollReveal>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${service.reversed ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${service.reversed ? 'lg:order-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift border-2 border-white/10">
                        <img
                          src={service.image}
                          alt={`${service.title} - Serviços especializados TECHDIO`}
                          className="w-full h-[500px] object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${service.reversed ? 'lg:order-1' : ''}`}>
                      <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        {service.title}
                      </h2>
                      
                      <p className="text-lg text-white/80 leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-lg">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white/90 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-cyan-500/10 border-l-4 border-cyan-400 p-6 rounded-lg mb-8 backdrop-blur-xl">
                        <p className="text-lg font-semibold text-cyan-300 italic">
                          {service.highlight}
                        </p>
                      </div>

                      <Button
                        size="lg"
                        className="btn-shine gradient-primary text-white font-bold shadow-lg hover:shadow-premium-lg hover:scale-105 transition-all duration-300 glow-blue"
                        onClick={openWhatsApp}
                      >
                        Solicitar Orçamento
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          ))}
          
          {/* Seção Expandida de Metrologia - Desktop Only */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
            <BackgroundPattern pattern="dots" className="opacity-5" />
            
            <div className="container relative z-10">
              <ScrollReveal>
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-xl mb-8 badge-glow">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-base font-black text-white tracking-wider uppercase">Expertise Metrológica</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                    Metrologia <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Avançada</span>
                  </h2>
                  <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6"></div>
                  
                  <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                    Combinamos ciência metrológica avançada com gestão estratégica de instrumentos
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <MetrologyInfoCard
                  icon="🔬"
                  title="Metrologia Científica"
                  description="Aplicação rigorosa de métodos científicos e estatísticos para garantir precisão absoluta e rastreabilidade completa das medições."
                  benefits={[
                    "Rastreabilidade ao SI (Sistema Internacional)",
                    "Análise detalhada de incertezas",
                    "Validação criteriosa de métodos",
                    "Compliance com normas internacionais"
                  ]}
                  gradient="linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)"
                  accentColor="#06B6D4"
                />
                
                <MetrologyInfoCard
                  icon="📋"
                  title="Plano Metrológico"
                  description="Gestão completa e estratégica do ciclo de vida dos seus instrumentos de medição, otimizando custos e garantindo conformidade."
                  benefits={[
                    "Inventário metrológico completo",
                    "Programação inteligente de calibrações",
                    "Controle digital de certificados",
                    "Indicadores de qualidade e performance",
                    "Gestão de custos otimizada"
                  ]}
                  gradient="linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                  accentColor="#8B5CF6"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Mobile Version - Tabs */}
        <section className="md:hidden py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <BackgroundPattern pattern="grid" className="opacity-5" />
          
          <div className="container relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-2">
                Serviços <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Detalhados</span>
              </h2>
              <p className="text-sm text-white/70">Selecione para ver mais detalhes</p>
            </div>

            <Tabs defaultValue="preventiva" className="w-full">
              <TabsList className="grid grid-cols-3 w-full bg-white/5 p-1 rounded-xl mb-6">
                <TabsTrigger value="preventiva" className="text-xs">Preventiva</TabsTrigger>
                <TabsTrigger value="corretiva" className="text-xs">Corretiva</TabsTrigger>
                <TabsTrigger value="calibracao" className="text-xs">Calibração</TabsTrigger>
              </TabsList>

              <TabsContent value="preventiva" className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/10">
                  <img
                    src="/servico-manutencao.jpg"
                    alt="Manutenção Preventiva de equipamentos clínicos - TECHDIO"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>

                <h3 className="text-2xl font-black text-white">Manutenção Preventiva</h3>
                
                <p className="text-base text-white/80 leading-relaxed">
                  Com a manutenção preventiva, você tem a tranquilidade de saber que seus equipamentos estão sempre em dia, prontos para atender às suas demandas.
                </p>

                <div className="space-y-3">
                  {[
                    'Logística própria',
                    'Grande estoque de peças',
                    '+ de 70 itens verificados',
                    'Laboratório de ponta',
                    'Nota de conformidade de acordo com a normativa RDC nº 611/22'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-white/90 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-cyan-500/10 border-l-4 border-cyan-400 p-4 rounded-lg backdrop-blur-xl">
                  <p className="text-sm font-semibold text-cyan-300 italic">
                    A manutenção preventiva é, em média, 10% do preço da manutenção corretiva!
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full gradient-primary text-white font-bold shadow-lg"
                  onClick={openWhatsApp}
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </TabsContent>

              <TabsContent value="corretiva" className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/10">
                  <img
                    src="/servico-manutencao.jpg"
                    alt="Manutenção Corretiva de equipamentos - Atendimento emergencial Suporte 24 horas"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>

                <h3 className="text-2xl font-black text-white">Manutenção Corretiva</h3>
                
                <p className="text-base text-white/80 leading-relaxed">
                  Ideal para situações urgentes, a manutenção corretiva garante que seus equipamentos voltam a operar sem comprometer sua rotina de trabalho.
                </p>

                <div className="space-y-3">
                  {[
                    'Atendimento emergencial',
                    'Reparos especializados',
                    'Suporte técnico disponível Suporte 24 horas',
                    'Garantia de peças e serviços',
                    'Soluções rápidas',
                    'Infraestrutura para armazenagem',
                    'Pagamento Facilitado'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-white/90 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-cyan-500/10 border-l-4 border-cyan-400 p-4 rounded-lg backdrop-blur-xl">
                  <p className="text-sm font-semibold text-cyan-300 italic">
                    A manutenção corretiva evita prejuízos e retoma suas operações com agilidade!
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full gradient-primary text-white font-bold shadow-lg"
                  onClick={openWhatsApp}
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </TabsContent>

              <TabsContent value="calibracao" className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/10">
                  <img
                    src="/servico-calibracao.jpg"
                    alt="Calibração de Precisão com certificação ISO/IEC 17025 e ANVISA"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>

                <h3 className="text-2xl font-black text-white">Calibração de Precisão</h3>
                
                <p className="text-base text-white/80 leading-relaxed">
                  Nossa calibração segue padrões internacionais acreditados, garantindo a precisão e confiabilidade dos seus equipamentos.
                </p>

                <div className="space-y-3">
                  {[
                    'Padrões acreditados pela RBC',
                    'Conformidade ISO/IEC 17025',
                    'Certificados rastreáveis',
                    'Rastreabilidade ao INMETRO',
                    'Equipamentos de alta precisão',
                    'Conformidade com normas ANVISA'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-white/90 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-cyan-500/10 border-l-4 border-cyan-400 p-4 rounded-lg backdrop-blur-xl">
                  <p className="text-sm font-semibold text-cyan-300 italic">
                    Calibração certificada que garante a confiabilidade dos seus resultados!
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full gradient-primary text-white font-bold shadow-lg"
                  onClick={openWhatsApp}
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Áreas de Atuação Section - PREMIUM REDESIGN */}
        <section id="areas" className="py-16 md:py-32 lg:py-40 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <BackgroundPattern pattern="dots" className="opacity-5" />
          
          {/* Decorative Orbs com mais destaque */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            {/* Header Premium */}
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-20">
                <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl mb-8 md:mb-10 badge-glow">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-base font-black text-white tracking-wider uppercase">Áreas de Atuação</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 title-section text-primary">
                  Onde{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Atuamos
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl lg:text-2xl text-secondary max-w-4xl mx-auto body-text-large font-light px-4">
                  Expertise especializada em múltiplos setores com
                  <span className="font-semibold text-cyan-300"> soluções personalizadas</span> e
                  <span className="font-semibold text-cyan-300"> certificações internacionais</span>
                </p>
              </div>
            </ScrollReveal>

            {/* Desktop: Layout em 2 linhas - 3 cards em cima, 2 centralizados embaixo */}
            <div className="hidden md:block w-full mb-24 px-4 lg:px-8">
              {/* Primeira Linha: 3 cards principais */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6">
              {[
                {
                  title: "Eletromédicos",
                  description: "Equipamentos eletrônicos médico-hospitalares de alta complexidade e precisão",
                  stats: "200+",
                  statsLabel: "Equipamentos/Ano",
                  badge: "ANVISA RDC 611/22",
                  badgeIcon: <Shield className="w-4 h-4" />,
                  gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  accentColor: "#2563EB",
                  icon: <ElectromedicalIcon className="w-10 h-10 text-white" />,
                  equipment: [
                    "Autoclaves e esterilizadores",
                    "Monitores multiparamétricos",
                    "Desfibriladores e cardioversores",
                    "Bombas de infusão",
                    "Ventiladores pulmonares",
                    "Bisturis elétricos"
                  ]
                },
                {
                  title: "Fisioterapia",
                  description: "Equipamentos especializados em reabilitação e terapia física",
                  stats: "80+",
                  statsLabel: "Equipamentos/Ano",
                  badge: "Especialização Terapêutica",
                  badgeIcon: <Activity className="w-4 h-4" />,
                  gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
                  accentColor: "#06B6D4",
                  icon: <PhysiotherapyIcon className="w-10 h-10 text-white" />,
                  equipment: [
                    "Ultrassom terapêutico",
                    "Laser terapêutico",
                    "TENS e FES",
                    "Ondas curtas e microondas",
                    "Turbilhão e compressas",
                    "Estimuladores musculares"
                  ]
                },
                {
                  title: "Estética",
                  description: "Equipamentos estéticos e dermatológicos de precisão certificados",
                  stats: "60+",
                  statsLabel: "Equipamentos/Ano",
                  badge: "Certificação Estética",
                  badgeIcon: <Heart className="w-4 h-4" />,
                  gradient: "linear-gradient(135deg, #A855F7 0%, #9333EA 100%)",
                  accentColor: "#A855F7",
                  icon: <AestheticIcon className="w-10 h-10 text-white" />,
                  equipment: [
                    "Laser dermatológico",
                    "Radiofrequência",
                    "Criolipólise",
                    "Carboxiterapia",
                    "Microagulhamento",
                    "Peeling ultrassônico"
                  ]
                }
              ].map((area, i) => (
                <PremiumAreaCard key={i} {...area} />
              ))}
              </div>

              {/* Segunda Linha: 2 cards centralizados */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Industriais",
                  description: "Equipamentos industriais e instrumentos de medição de alta precisão",
                  stats: "150+",
                  statsLabel: "Equipamentos/Ano",
                  badge: "Metrologia Industrial",
                  badgeIcon: <Cpu className="w-4 h-4" />,
                  gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  accentColor: "#F59E0B",
                  icon: <IndustryIcon className="w-10 h-10 text-white" />,
                  equipment: [
                    "Balanças e sistemas de pesagem",
                    "Manômetros e transdutores",
                    "Termômetros industriais",
                    "Medidores de vazão",
                    "Instrumentos dimensionais",
                    "Calibradores de processo"
                  ]
                },
                {
                  title: "Odontológico",
                  description: "Equipamentos odontológicos e sistemas de diagnóstico especializados",
                  stats: "100+",
                  statsLabel: "Equipamentos/Ano",
                  badge: "Certificação Odontológica",
                  badgeIcon: <Shield className="w-4 h-4" />,
                  gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  accentColor: "#10B981",
                  icon: <DentalIcon className="w-10 h-10 text-white" />,
                  equipment: [
                    "Autoclaves odontológicas",
                    "Fotopolimerizadores",
                    "Amalgamadores",
                    "Ultrassom odontológico",
                    "Aparelhos de raio-X",
                    "Compressores odontológicos"
                  ]
                }
              ].map((area, i) => (
                <PremiumAreaCard key={i} {...area} />
              ))}
              </div>
            </div>

            {/* Mobile: Carousel */}
            <div className="md:hidden mb-16 px-4">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full max-w-sm mx-auto"
              >
                <CarouselContent>
                  {[
                    {
                      title: "Eletromédicos",
                      description: "Equipamentos eletrônicos médico-hospitalares de alta complexidade e precisão",
                      stats: "200+",
                      statsLabel: "Equipamentos/Ano",
                      badge: "ANVISA RDC 611/22",
                      badgeIcon: <Shield className="w-4 h-4" />,
                      gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                      accentColor: "#2563EB",
                      icon: <ElectromedicalIcon className="w-10 h-10 text-white" />,
                      equipment: [
                        "Autoclaves e esterilizadores",
                        "Monitores multiparamétricos",
                        "Desfibriladores e cardioversores",
                        "Bombas de infusão",
                        "Ventiladores pulmonares",
                        "Bisturis elétricos"
                      ]
                    },
                    {
                      title: "Fisioterapia",
                      description: "Equipamentos especializados em reabilitação e terapia física",
                      stats: "80+",
                      statsLabel: "Equipamentos/Ano",
                      badge: "Especialização Terapêutica",
                      badgeIcon: <Activity className="w-4 h-4" />,
                      gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
                      accentColor: "#06B6D4",
                      icon: <PhysiotherapyIcon className="w-10 h-10 text-white" />,
                      equipment: [
                        "Ultrassom terapêutico",
                        "Laser terapêutico",
                        "TENS e FES",
                        "Ondas curtas e microondas",
                        "Turbilhão e compressas",
                        "Estimuladores musculares"
                      ]
                    },
                    {
                      title: "Estética",
                      description: "Equipamentos estéticos e dermatológicos de precisão certificados",
                      stats: "60+",
                      statsLabel: "Equipamentos/Ano",
                      badge: "Certificação Estética",
                      badgeIcon: <Heart className="w-4 h-4" />,
                      gradient: "linear-gradient(135deg, #A855F7 0%, #9333EA 100%)",
                      accentColor: "#A855F7",
                      icon: <AestheticIcon className="w-10 h-10 text-white" />,
                      equipment: [
                        "Laser dermatológico",
                        "Radiofrequência",
                        "Criolipólise",
                        "Carboxiterapia",
                        "Microagulhamento",
                        "Peeling ultrassônico"
                      ]
                    },
                    {
                      title: "Industriais",
                      description: "Equipamentos industriais e instrumentos de medição de alta precisão",
                      stats: "150+",
                      statsLabel: "Equipamentos/Ano",
                      badge: "Metrologia Industrial",
                      badgeIcon: <Cpu className="w-4 h-4" />,
                      gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                      accentColor: "#F59E0B",
                      icon: <IndustryIcon className="w-10 h-10 text-white" />,
                      equipment: [
                        "Balanças e sistemas de pesagem",
                        "Manômetros e transdutores",
                        "Termômetros industriais",
                        "Medidores de vazão",
                        "Instrumentos dimensionais",
                        "Calibradores de processo"
                      ]
                    },
                    {
                      title: "Odontológico",
                      description: "Equipamentos odontológicos e sistemas de diagnóstico especializados",
                      stats: "100+",
                      statsLabel: "Equipamentos/Ano",
                      badge: "Certificação Odontológica",
                      badgeIcon: <Shield className="w-4 h-4" />,
                      gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      accentColor: "#10B981",
                      icon: <DentalIcon className="w-10 h-10 text-white" />,
                      equipment: [
                        "Autoclaves odontológicas",
                        "Fotopolimerizadores",
                        "Amalgamadores",
                        "Ultrassom odontológico",
                        "Aparelhos de raio-X",
                        "Compressores odontológicos"
                      ]
                    }
                  ].map((area, i) => (
                    <CarouselItem key={i}>
                      <div className="p-1">
                        <PremiumAreaCard {...area} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-2 mt-6">
                  <CarouselPrevious className="static translate-y-0 translate-x-0" />
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-white/30" />
                    ))}
                  </div>
                  <CarouselNext className="static translate-y-0 translate-x-0" />
                </div>
              </Carousel>
            </div>

            {/* Stats Section - Animado e Destacado with Stagger */}
            <StaggerContainer speed="fast" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
              {[
                {
                  value: "500+",
                  label: "Equipamentos",
                  sublabel: "Calibrados/Ano",
                  icon: <Activity className="w-8 h-8" />,
                  gradient: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)"
                },
                {
                  value: "100+",
                  label: "Instituições",
                  sublabel: "Atendidas",
                  icon: <Users className="w-8 h-8" />,
                  gradient: "linear-gradient(135deg, #10B981 0%, #14B8A6 100%)"
                },
                {
                  value: "100%",
                  label: "Conformidade",
                  sublabel: "Garantida",
                  icon: <Shield className="w-8 h-8" />,
                  gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
                },
                {
                  value: "Suporte 24 horas",
                  label: "Suporte",
                  sublabel: "Disponível",
                  icon: <TrendingUp className="w-8 h-8" />,
                  gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)"
                }
              ].map((stat, i) => (
                <AnimatedStatsCard key={i} {...stat} delay={i * 100} />
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Cobertura Nacional Section - MAPA INTERATIVO */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
          <BackgroundPattern pattern="dots" className="opacity-5" />
          
          {/* Decorative orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl mb-8 md:mb-10 badge-glow">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-base font-black text-white tracking-wider uppercase">Cobertura Nacional</span>
                </div>
                
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 title-section text-primary">
                  Atendemos em{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Todo o Brasil
                  </span>
                </h2>
                
                <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6"></div>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl lg:text-2xl text-secondary max-w-3xl mx-auto body-text-large font-light px-4">
                  Presença nacional com{' '}
                  <span className="font-semibold text-cyan-300">logística integrada</span> para calibração e manutenção em{' '}
                  <span className="font-semibold text-cyan-300">qualquer estado</span>
                </p>
              </div>
            </ScrollReveal>
            
            {/* Mapa Component */}
            <ScrollReveal delay={100}>
              <BrazilCoverageMap showStats={true} />
            </ScrollReveal>
          </div>
        </section>

        {/* Parceiros Section */}
        <PartnersSection />

        {/* Contato Section - DARK THEME */}
        <section id="contato" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
          <BackgroundPattern pattern="dots" className="opacity-5" />
          
          {/* Decorative orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl mb-10 badge-glow">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-base font-black text-white tracking-wider uppercase">Entre em Contato</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 title-section text-primary">
                  Vamos <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Conversar?</span>
                </h2>
              </div>
            </ScrollReveal>

            <StaggerContainer speed="normal" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
              {[
                { icon: Phone, label: "Telefone", value: "(44) 9 9701-4422", href: "tel:+5544997014422" },
                { icon: Mail, label: "E-mail", value: "techdio.qualidade@gmail.com", href: "mailto:techdio.qualidade@gmail.com" },
                { icon: MapPin, label: "Localização", value: "Cianorte, Paraná", href: "#" }
              ].map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <ScrollReveal key={i} delay={i * 100}>
                    <a
                      href={contact.href}
                      className="block"
                    >
                      <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 text-center rounded-3xl border-2 border-white/10 hover:border-cyan-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-cyan-500/20">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm font-bold text-white/70 mb-2">{contact.label}</p>
                        <p className="text-lg font-black text-white">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </StaggerContainer>

            <ScrollReveal delay={300}>
              <div className="glass-strong elevation-premium p-12 text-center max-w-3xl mx-auto rounded-3xl border-2 border-white/10">
                <p className="text-xl text-secondary mb-8 font-semibold body-text-large">
                  Pronto para transformar sua operação? <br className="hidden sm:block" />
                  Solicite um diagnóstico gratuito.
                </p>
                <Button
                  size="lg"
                  className="btn-shine gradient-primary text-white font-black shadow-xl hover:shadow-premium-lg hover:scale-105 transition-all duration-300 glow-blue px-12"
                  onClick={openWhatsApp}
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer - DARK PREMIUM */}
      <footer className="bg-slate-950 text-white py-16 md:py-20 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/logo/logorodapé.png" alt="TECHDIO Logo" className="h-20 md:h-24 w-auto mb-6" />
              <p className="text-base text-white/60 font-medium leading-relaxed mb-4">
                Tecnologia Integrada à Saúde
              </p>
              <div className="space-y-2 text-sm text-white/50 mb-6">
                <p className="font-semibold text-white/70">TECHDIO - TECNOLOGIA INTEGRADA À SAÚDE</p>
                <p>CNPJ: 35.943.310/0001-24</p>
              </div>
              
              {/* Redes Sociais */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/techdiotecnologia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/5544997014422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-black mb-6 text-lg">Serviços</h4>
              <ul className="space-y-3 text-sm text-white/60 font-medium">
                <li><a href="#servicos" onClick={() => scrollToSection('servicos')} className="hover:text-cyan-400 transition-colors cursor-pointer">Calibração</a></li>
                <li><a href="#servicos" onClick={() => scrollToSection('servicos')} className="hover:text-cyan-400 transition-colors cursor-pointer">Manutenção</a></li>
                <li><a href="#servicos" onClick={() => scrollToSection('servicos')} className="hover:text-cyan-400 transition-colors cursor-pointer">Consultoria</a></li>
                <li><a href="#areas" onClick={() => scrollToSection('areas')} className="hover:text-cyan-400 transition-colors cursor-pointer">Áreas de Atuação</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black mb-6 text-lg">Contato</h4>
              <ul className="space-y-3 text-sm text-white/60 font-medium">
                <li><a href="tel:+5544997014422" className="hover:text-cyan-400 transition-colors">(44) 9 9701-4422</a></li>
                <li><a href="mailto:techdio.qualidade@gmail.com" className="hover:text-cyan-400 transition-colors">techdio.qualidade@gmail.com</a></li>
                <li className="text-white/60 leading-relaxed">Rua Padre Theobaldo Blume, 1668<br />Zona 2 - Cianorte, PR</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black mb-6 text-lg">Certificações</h4>
              <ul className="space-y-3 text-sm text-white/60 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>ISO/IEC 17025</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>ANVISA RDC 611/22</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>INMETRO/RBC</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-white/40 mb-1">&copy; 2024 TECHDIO - Tecnologia Integrada à Saúde. Todos os direitos reservados.</p>
                <p className="text-xs text-white/30">CNPJ: 35.943.310/0001-24</p>
              </div>
              <p className="text-xs text-white/30">Desenvolvido com tecnologia de ponta</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

