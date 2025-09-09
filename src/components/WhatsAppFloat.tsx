
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 500);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim do site e gostaria de saber mais sobre os serviços da Val's Limpeza e Paisagismo.";
    const whatsappUrl = `https://wa.me/5515997483423?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 animate-fade-in">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 animate-fade-in">
              <div className="bg-white text-nature-800 px-3 sm:px-4 py-2 rounded-lg shadow-nature text-xs sm:text-sm font-medium whitespace-nowrap relative max-w-[200px] sm:max-w-none">
                <span className="hidden sm:inline">Precisa de ajuda? Fale conosco!</span>
                <span className="sm:hidden">Fale conosco!</span>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="ml-2 text-nature-600 hover:text-nature-800"
                  aria-label="Fechar tooltip"
                >
                  <X className="h-3 w-3" />
                </button>
                {/* Arrow */}
                <div className="absolute top-full right-3 sm:right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>
          )}

          {/* Button */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-float"
            aria-label="Conversar no WhatsApp"
          >
            <MessageCircle className="h-5 w-5 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform" />
            
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;
