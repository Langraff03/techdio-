import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { APP_LOGO } from "@/const";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <BackgroundPattern pattern="dots" className="opacity-10" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 w-full max-w-2xl mx-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={APP_LOGO} 
            alt="TECHDIO Logo" 
            className="h-16 w-auto brightness-110"
          />
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
              <AlertCircle className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Página Não Encontrada
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-lg mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
          <br />
          Que tal voltar para a página inicial?
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleGoHome}
            size="lg"
            className="gradient-primary text-white font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-premium-lg hover:scale-105 transition-all duration-300 glow-blue"
          >
            <Home className="w-5 h-5 mr-2" />
            Ir para Home
          </Button>
          
          <Button
            onClick={handleGoBack}
            size="lg"
            variant="outline"
            className="border-2 border-white/40 text-white hover:bg-white/15 font-bold text-lg px-8 py-6 backdrop-blur-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-white/50 mb-4">
            Precisa de ajuda? Entre em contato conosco:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a 
              href="tel:+5544997014422" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              📞 (44) 99701-4422
            </a>
            <a 
              href="mailto:techdio.qualidade@gmail.com" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              ✉️ techdio.qualidade@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
