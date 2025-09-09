import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-nature' : ''
      }`}
      style={{ backgroundColor: '#fcffde' }}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/lovable-uploads/a1235aaa-314b-46df-bb17-995c20e6fdbb.png" 
              alt="Val's Limpeza e Paisagismo - Logo" 
              className="h-10 sm:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-base sm:text-lg text-nature-700">Val's</h1>
              <p className="text-xs text-nature-600">Limpeza & Paisagismo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">(11) 91031-4915</span>
            </div>
            <Button 
              className="btn-hero"
              onClick={() => window.open('https://wa.me/5511910314915', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden py-4 border-t border-border backdrop-blur-md"
            style={{ backgroundColor: '#fcffde' }}
          >
            <nav className="flex flex-col space-y-2 sm:space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Contato
              </button>
              <div className="px-4 pt-2 border-t border-border">
                <div className="flex items-center space-x-2 text-xs sm:text-sm mb-3">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-foreground">(11) 91031-4915</span>
                </div>
                <Button 
                  className="btn-hero w-full text-sm"
                  onClick={() => window.open('https://wa.me/5511910314915', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
