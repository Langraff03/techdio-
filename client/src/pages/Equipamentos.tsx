import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { APP_LOGO } from "@/const";
import ScrollReveal from "@/components/ScrollReveal";
import BackgroundPattern from "@/components/BackgroundPattern";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { equipmentCategories, equipmentStats } from "@/data/equipamentos";

export default function Equipamentos() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = equipmentCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const openWhatsApp = () => {
    const whatsappNumber = "5544997014422";
    const message = "Olá! Gostaria de solicitar um orçamento para calibração de equipamentos.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src={APP_LOGO} alt="TECHDIO Logo" className="h-14 sm:h-16 md:h-20 w-auto drop-shadow-md" />
              </a>
            </Link>
          </div>

          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar ao Site</span>
              <span className="sm:hidden">Voltar</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
          <BackgroundPattern pattern="dots" className="opacity-20" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-950/40"></div>
          
          <div className="container relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/30 rounded-full backdrop-blur-xl shadow-lg mb-8 badge-glow">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-sm md:text-base font-bold text-white tracking-wide uppercase">Catálogo Completo</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 title-display">
                  Equipamentos
                  <br />
                  <span className="animated-gradient-text">Calibráveis</span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
                  Mais de <span className="font-bold text-cyan-300">{equipmentStats.totalEquipmentTypes}+ tipos</span> de equipamentos em
                  <span className="font-bold text-cyan-300"> {equipmentStats.totalCategories} categorias</span> especializadas
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: equipmentStats.totalCategories, label: "Categorias" },
                    { value: `${equipmentStats.totalEquipmentTypes}+`, label: "Equipamentos" },
                    { value: equipmentStats.norms.length, label: "Normas" },
                    { value: equipmentStats.applications.length, label: "Aplicações" }
                  ].map((stat, i) => (
                    <div key={i} className="glass border border-white/20 rounded-2xl p-4 backdrop-blur-xl">
                      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar equipamentos ou categorias..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/90 backdrop-blur-xl border-2 border-white/20 focus:border-cyan-400 focus:outline-none text-gray-900 font-medium placeholder-gray-500 transition-all"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <BackgroundPattern pattern="grid" className="opacity-5" />
          
          <div className="container relative z-10">
            {searchTerm && (
              <div className="mb-8 text-center">
                <p className="text-white/70">
                  Encontrados <span className="text-cyan-400 font-bold">{filteredCategories.length}</span> resultado(s)
                </p>
              </div>
            )}

            <Accordion type="single" collapsible className="w-full space-y-4 max-w-5xl mx-auto">
              {filteredCategories.map((category, index) => (
                <ScrollReveal key={category.id} delay={index * 50}>
                  <AccordionItem 
                    value={category.id} 
                    className="bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden px-6"
                  >
                    <AccordionTrigger className="text-white hover:no-underline py-6 hover:text-cyan-400 transition-colors">
                      <div className="flex items-center gap-4 text-left flex-1">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-4xl border border-white/10">
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-black mb-1">
                            {category.title}
                          </h3>
                          <p className="text-sm md:text-base text-white/60 font-medium">
                            {category.items.length} tipos de equipamentos
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="text-white/80 pb-6">
                      {/* Description */}
                      <p className="text-base md:text-lg leading-relaxed mb-6 text-white/70">
                        {category.description}
                      </p>

                      {/* Equipment List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {category.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mt-0.5 shadow-lg">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm md:text-base text-white/90 font-medium leading-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Related Norms */}
                      {category.relatedNorms && category.relatedNorms.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-bold text-white/70 mb-3 uppercase tracking-wide">Normas Relacionadas:</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.relatedNorms.map((norm, i) => (
                              <Badge key={i} variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-300 font-semibold">
                                {norm}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Applications */}
                      {category.applications && category.applications.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold text-white/70 mb-3 uppercase tracking-wide">Aplicações:</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.applications.map((app, i) => (
                              <Badge key={i} variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-300 font-semibold">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>

            {filteredCategories.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl text-white/70 mb-2">Nenhum resultado encontrado</p>
                <p className="text-white/50">Tente buscar por outro termo</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-blue-950 relative overflow-hidden">
          <BackgroundPattern pattern="dots" className="opacity-5" />
          
          <div className="container relative z-10">
            <ScrollReveal>
              <div className="glass-strong elevation-premium p-8 md:p-12 text-center max-w-4xl mx-auto rounded-3xl border-2 border-white/10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Não encontrou o que procura?
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Entre em contato conosco para calibração de equipamentos específicos ou consultoria técnica especializada
                </p>
                <Button
                  size="lg"
                  className="btn-shine gradient-primary text-white font-black shadow-xl hover:shadow-premium-lg hover:scale-105 transition-all duration-300 glow-blue px-12"
                  onClick={openWhatsApp}
                >
                  Solicitar Orçamento
                  <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer Simplificado */}
      <footer className="bg-slate-950 text-white py-8 border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img src={APP_LOGO} alt="TECHDIO Logo" className="h-10 w-auto" />
              <span className="text-sm text-white/60">Tecnologia Integrada à Saúde</span>
            </div>
            <p className="text-sm text-white/40">&copy; 2024 TECHDIO. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}