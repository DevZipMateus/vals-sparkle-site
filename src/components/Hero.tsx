
import React from 'react';
import { Sparkles, Leaf, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-nature-50 via-white to-nature-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-nature-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-nature-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary font-medium">
                <Leaf className="h-5 w-5" />
                <span>Mais de 20 anos de experiência</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Limpeza profissional</span>
                <br />
                <span className="text-foreground">com toque pessoal</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Cultivando o melhor em cada serviço. Especializados em limpeza, conservação, tratamento de piso e paisagismo em Sorocaba e região.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-nature-200">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-sm">Qualidade</h3>
                  <p className="text-xs text-muted-foreground">Garantida</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-nature-200">
                <Sparkles className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-sm">Profissional</h3>
                  <p className="text-xs text-muted-foreground">Certificado</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-nature-200">
                <Leaf className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-sm">Sustentável</h3>
                  <p className="text-xs text-muted-foreground">Responsável</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-hero group"
                onClick={() => window.open('https://wa.me/5511910314915?text=Olá! Gostaria de solicitar um orçamento para os serviços da Val\'s.', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-hero"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-nature-500 rounded-full"></div>
                <span>CNPJ: 37.622.945/0001-55</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-nature-500 rounded-full"></div>
                <span>Sorocaba - SP</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/a1235aaa-314b-46df-bb17-995c20e6fdbb.png" 
                alt="Val's Limpeza e Paisagismo - Serviços profissionais de limpeza e jardinagem"
                className="w-full max-w-md mx-auto h-auto drop-shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-nature-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
