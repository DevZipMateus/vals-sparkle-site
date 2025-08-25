
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nature-900 text-white">
      <div className="container-responsive py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a1235aaa-314b-46df-bb17-995c20e6fdbb.png" 
                alt="Val's Limpeza e Paisagismo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="font-bold text-lg">Val's</h3>
                <p className="text-sm text-nature-300">Limpeza & Paisagismo</p>
              </div>
            </div>
            <p className="text-nature-300 text-sm leading-relaxed">
              Mais de 20 anos transformando ambientes com qualidade, profissionalismo e sustentabilidade.
            </p>
            <p className="text-nature-400 text-xs">
              CNPJ: 37.622.945/0001-55
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-nature-300">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Limpeza e Conservação
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Tratamento de Piso
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Jardinagem e Paisagismo
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços Especializados
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-nature-300">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-nature-400" />
                <a href="tel:+5511910314915" className="hover:text-white transition-colors">
                  (11) 91031-4915
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 text-nature-400" />
                <a href="mailto:val.slimpeza@gmail.com" className="hover:text-white transition-colors">
                  val.slimpeza@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-nature-400" />
                <address className="not-italic leading-relaxed">
                  Rua Gentile Gioachino, 178<br />
                  Vila Nova Sorocaba<br />
                  Sorocaba - SP<br />
                  CEP: 18070-825
                </address>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/valslimpezaepaisagismo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nature-800 p-3 rounded-lg hover:bg-nature-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
              <a 
                href="https://www.facebook.com/share/1Cr8oGtCtv/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nature-800 p-3 rounded-lg hover:bg-nature-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            
            <div>
              <h5 className="font-medium mb-2 text-nature-200">Horário de Funcionamento</h5>
              <p className="text-sm text-nature-300">
                Segunda a Sexta<br />
                8h às 18h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-nature-800">
        <div className="container-responsive py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-nature-400">
              © {currentYear} Val's Serviços de Limpeza e Paisagismo. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-nature-400">
              <a href="#inicio" className="hover:text-white transition-colors">
                Início
              </a>
              <a href="#sobre" className="hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#contato" className="hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-nature-800 text-center">
            <p className="text-xs text-nature-500 italic">
              "Limpeza profissional com toque pessoal, cultivando o melhor!"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
