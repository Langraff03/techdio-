import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "5544997014422"; // Número da TECHDIO
  const message = "Olá! Gostaria de solicitar um orçamento para calibração/manutenção de equipamentos.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-bounce"
        style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-50"></span>
      </button>

      {/* Tooltip on hover - hidden on mobile */}
      <div className="hidden md:block fixed bottom-6 right-24 z-50 pointer-events-none">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Fale conosco no WhatsApp
        </div>
      </div>
    </>
  );
}